/**
 * @openapi
 * 
 * /students/save-attendance:
 *      post:
 *          security:
 *              - BearerToken: []
 *          tags: [Teacher]
 *          summary: This helps teacher to make a student attendance.
 *          description: Make attendance
 * 
 *          requestBody:
 *              description: Add Comment
 *              content:
 *                application/json:
 *                    schema:
 *                       type: array
 *                       items:
 *                          type: object
 *                          properties:
 *                               teacherId:
 *                                  type: string
 *                               studentId:
 *                                  type: integer
 *                               date:
 *                                  type: string
 *                               comment:
 *                                  type: string
 *          responses:
 *                  201:
 *                      description: Attendance successfully
 *                  403:
 *                      description: Not allowed to make attendance
 *                  500:
 *                      description: Internal Server Error
 */ 
