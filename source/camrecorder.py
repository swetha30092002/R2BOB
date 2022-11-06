import cv2
cap = cv2.VideoCapture(0)
cap.set(3,640) # set Width
cap.set(4,480) # set Height
### video recording
fourcc = cv2.VideoWriter_fourcc(*'XVID')
out = cv2.VideoWriter('output.avi',fourcc, 20.0, (640,480))
## video recording
while(True):
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    ### save recorded video
    out.write(frame)
    cv2.imshow('frame window to capture video', frame)
    cv2.imshow('gray', gray)
    k = cv2.waitKey(30) 
    if k == 27: # press 'ESC' to quit
        break
cap.release()
out.release()
cv2.destroyAllWindows()
