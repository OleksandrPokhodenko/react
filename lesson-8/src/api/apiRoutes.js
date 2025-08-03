const API_BASE_URL = 'http://localhost:5000/api'
export default {
    teachersList: `${API_BASE_URL}/teachers`,
    deleteTeacher: (id) => `${API_BASE_URL}/teachers/${id}`,
    editTeacher: (id) => `${API_BASE_URL}/teachers/${id}`,
    addTeacher: `${API_BASE_URL}/teachers`
}