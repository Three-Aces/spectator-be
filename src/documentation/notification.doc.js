/**
 * @openapi
 * 
 * /notifications/{userId}:
 *      get:
 *          tags: [Notifications]
 *          summary: This helps to retrieve all notification for a user.
 *          description: Retrieve Notifications
 *          parameters:
 *              - name: userId
 *                in: path
 *                required: true
 * 
 *          responses:
 *              200:
 *                  description: notification retrieved successfully!
 *              500:
 *                  description: Internal server error
 * 
 * /notifications/parents/{studentId}/attendance-notify:
 *      post:
 *          tags: [Notifications]
 *          summary: This helps to notify parents about student attendance.
 *          description: Notify Attendance
 *          parameters:
 *              - name: studentId
 *                in: path
 *                required: true
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              comment:
 *                                  type: string
 *                              courseId:
 *                                  type: integer
 * 
 *          responses:
 *              201:
 *                  description: notification sent successfully!
 *              500:
 *                  description: Internal server error
 * 
 */