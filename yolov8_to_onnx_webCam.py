import cv2
import numpy as np
import onnxruntime as ort
import time


CLASSES = ['person', 'wolf', 'Bear']
ort_session = ort.InferenceSession('best.onnx')


def precess_image(img_src, resize_w, resize_h):
    image = cv2.resize(img_src, (resize_w, resize_h), interpolation=cv2.INTER_LINEAR)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image = image.astype(np.float32)
    image /= 255.0

    return image


def output_image(img_src, resize_w, resize_h):
    image = cv2.resize(img_src, (resize_w, resize_h))

    return image


def iou(box1, box2):
    # 计算交集区域的坐标
    box1x1, box1y1 = (box1[0] - box1[2] / 2), (box1[1] - box1[3] / 2)
    box1x2, box1y2 = (box1[0] + box1[2] / 2), (box1[1] + box1[3] / 2)
    box2x1, box2y1 = (box2[0] - box2[2] / 2), (box2[1] - box2[3] / 2)
    box2x2, box2y2 = (box2[0] + box2[2] / 2), (box2[1] + box2[3] / 2)
    x1 = max(box1x1, box2x1)
    y1 = max(box1y1, box2y1)
    x2 = min(box1x2, box2x2)
    y2 = min(box1y2, box2y2)
    '''print(box1)
    print(box2)
    print(x1,x2,y1,y2)'''
    # 计算交集区域的面积
    inter_area = max(0, x2 - x1 + 1) * max(0, y2 - y1 + 1)
    # 计算两个边界框的面积
    box1_area = ((box1x2 - box1x1 + 1) * (box1y2 - box1y1 + 1))
    box2_area = ((box2x2 - box2x1 + 1) * (box2y2 - box2y1 + 1))
    #print(inter_area,box1_area,box2_area)
    # 计算IoU
    iou = inter_area / float(box1_area + box2_area - inter_area)
    return iou


def non_max_suppression(boxes, scores, threshold):
    # 创建一个用于存储保留的边界框的列表
    keep = []
    # 对得分进行排序
    order = scores.argsort()[::-1]
    #print(scores)
    '''
    print(order)'''
    # 循环直到所有边界框都被检查
    while order.size > 0:
        # 将当前最大得分的边界框添加到keep中
        i = order[0]
        #print(i)
        #print(boxes[i])
        keep.append(i)
        # 计算剩余边界框与当前边界框的IoU
        ious = np.array([iou(boxes[i], boxes[j]) for j in order[1:]])
        # 找到与当前边界框IoU小于阈值的边界框
        #print("ious:",ious)
        inds = np.where(ious <= threshold)[0]
        # 更新order，只保留那些与当前边界框IoU小于阈值的边界框
        order = order[inds + 1]
    #print(keep)
    return keep


def filter_boxes(output, threshold):
    # 获取所有候选框的坐标和得分
    boxes = output[:, :4]
    scores = output[:, 4:]
    # 计算每个边界框最高的得分
    max_scores = np.max(scores, axis=1)
    # 找到满足阈值条件的边界框
    keep = max_scores >= threshold
    # 返回筛选后的边界框和得分
    return boxes[keep], scores[keep]


def image_process(image):
    start_time = time.time()

    preimage = precess_image(image, 256, 256)

    preImage = preimage.transpose((2, 0, 1))
    preImage = np.expand_dims(preImage, axis=0)

    '''img_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # BGR转RGB
    img_pil = Image.fromarray(img_rgb)  # array 转 PIL

    ## 预处理
    input_img = test_transform(img_pil)  # 预处理
    preImage = input_img.unsqueeze(0).numpy()'''

    ort_inputs = {'images': preImage}  # onnx runtime 输入
    pred_results = ort_session.run(None, ort_inputs)[0]

    # print(pred_results)
    detect_score = np.squeeze(pred_results)
    # print(detect_score.shape)
    output_data = np.transpose(detect_score)
    # print(output_data.shape)

    filtered_boxes, filtered_scores = filter_boxes(output_data, 0.6)
    # 计算每个边界框的最高得分
    max_scores = np.max(filtered_scores, axis=1)
    # 应用非极大值抑制，阈值设为0.5
    keep = non_max_suppression(filtered_boxes, max_scores, 0.5)
    # 最后留下的候选框
    final_boxes = filtered_boxes[keep]
    final_scores = filtered_scores[keep]
    indexs = np.argmax(final_scores, axis=1)

    names = ["Human", "Wolf", 'Bear']

    #print("识别到", [names[i] for i in indexs])

    colors = [(0, 0, 255), (255, 0, 0), (0, 255, 0)]
    width, height = 256, 256

    final_image = output_image(image, 256, 256)
    end_time = time.time()
    #fps=1/(end_time-start_time)
    for i, dt in enumerate(final_boxes):
        #print(dt)
        center_x = int(dt[0])
        center_y = int(dt[1])
        w = int(dt[2])
        h = int(dt[3])
        x = int(center_x - w / 2)
        y = int(center_y - h / 2)
        index = indexs[i]
        # 使用 cv2.putText() 方法绘制文字
        cv2.rectangle(final_image, (x, y), (x + w, y + h), colors[index], 2)
        cv2.putText(final_image, names[index], (x, y - 4), cv2.FONT_HERSHEY_SIMPLEX, 0.8, colors[index], 2, cv2.LINE_AA)

    end_time = time.time()
    #fps = 1 / (end_time - start_time)
    #cv2.putText(final_image, str(int(fps)), (20, 20), cv2.FONT_HERSHEY_SIMPLEX, 0.8, colors[0], 2, cv2.LINE_AA)
    return final_image

def get_frame(frame):
    frame = image_process(frame)
    frame = output_image(frame, 480, 480)
    jepg = cv2.imencode('.jpg',frame)
    return jepg.tobytes()

if __name__ == '__main__':
    # 读取图片
    rawImage = cv2.imread('test4.jpg')

    '''frame = image_process(rawImage)
    frame = output_image(frame, 480, 480)
    # 展示处理后的三通道图像
    cv2.imshow('my_window', frame)

    key_pressed = cv2.waitKey()  # 每隔多少毫秒毫秒，获取键盘哪个键被按下'''

    cap = cv2.VideoCapture(0)
    cap.open(0)

    while cap.isOpened():
        # 获取画面
        success, frame = cap.read()

        if not success:  # 如果获取画面不成功，则退出
            print('获取画面不成功，退出')
            break

        frame = image_process(frame)
        frame = output_image(frame,480,480)
        # 展示处理后的三通道图像
        cv2.imshow('my_window', frame)

        key_pressed = cv2.waitKey(20)  # 每隔多少毫秒毫秒，获取键盘哪个键被按下
        # print('键盘上被按下的键：', key_pressed)

        if key_pressed in [ord('q'), 27]:  # 按键盘上的q或esc退出（在英文输入法下）
            break
    # 关闭摄像头
    cap.release()

    # 关闭图像窗口
    cv2.destroyAllWindows()

