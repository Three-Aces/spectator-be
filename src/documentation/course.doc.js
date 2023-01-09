/**
 * @openapi
 * 
 * /courses:
 *      get:
 *          security:
 *              - BearerToken: []
 *          tags: [Courses]
 *          summary: This helps to list all courses.
 *          description: List Courses
 * 
 *          responses:
 *                  200:
 *                      description: Courses retrieved successfully
 *                  403:
 *                      description: Not allowed
 *                  500:
 *                      description: Internal Server Error
 * 
 * /courses/{teacherId}/add-course:
 *      post:
 *          security:
 *              - BearerToken: []
 *          tags: [Courses]
 *          summary: This helps to list all courses.
 *          description: List Courses
 *          parameters:
 *              - name: teacherId
 *                in: path
 * 
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                              level:
 *                                  type: string
 *                                  example: 'O-level, A-level'
 *          responses:
 *                  201:
 *                      description: Courses added successfully
 *                  403:
 *                      description: Not allowed
 *                  500:
 *                      description: Internal Server Error
 * 
 * 
 */