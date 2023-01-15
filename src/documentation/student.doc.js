/**
 * @openapi
 * 
 * /student/addstudent:
 *      post:
 *          security:
 *              - BearerToken: []
 *          tags: [Student]
 *          summary: This helps Parent to add a new student.
 *          description: Parent Add new Student
 * 
 *          requestBody:
 *              description: Add new Student
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           firstName:
 *                               type: string
 *                           lastName:
 *                               type: string
 *                           sex:
 *                               type: string 
 *                               example: 'male, female, other'
 *          responses:
 *              201:
 *                  description: student created!
 *              404:
 *                  description: Not Found
 *              500:
 *                  description: Internal server error
 * 
 * /student/getAllStudents:
 *      get:
 *          tags: [Student]
 *          summary: This helps to get list all students.
 *          description: List all Students
 * 
 *          responses:
 *              200:
 *                  description: student retrieved!
 *              404:
 *                  description: Not Found
 *              500:
 *                  description: Internal server error
 * 
 * /student/{studentId}/behavior:
 *      post:
 *          tags: [Behavior-Marks/History]
 *          summary: This helps to record behavior marks history.
 *          description: Record Behavior Marks History
 *          parameters:
 *              - name: studentId
 *                in: path
 *                required: true
 * 
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              reducedMarks:
 *                                  type: integer
 *                              comment:
 *                                  type: string
 * 
 *          responses:
 *              201:
 *                  description: Behavior Marks History Created!
 *              404:
 *                  description: Not Found
 *              500:
 *                  description: Internal server error
 * 
 *      get:
 *          tags: [Behavior-Marks/History]
 *          summary: This helps to list behavior marks history.
 *          description: Record Behavior Marks History
 *          parameters:
 *              - name: studentId
 *                in: path
 *                required: true
 * 
 *          responses:
 *              200:
 *                  description: List all Behavior Marks History
 *              404:
 *                  description: Not Found
 *              500:
 *                  description: Internal server error
 * 
 * /student/{studentId}/print:
 *      get:
 *          tags: [Behavior-Marks/Print]
 *          summary: This helps to print pdf list all students.
 *          description: List all Students
 *          parameters:
 *              - name: studentId
 *                in: path
 *                required: true
 * 
 *          responses:
 *              200:
 *                  description: Pdf generated!
 *              404:
 *                  description: Not Found
 *              500:
 *                  description: Internal server error
 * 
 */