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
 */