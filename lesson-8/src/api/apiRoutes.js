const API_BASE_URL = 'https://teacher-backend-q91e.onrender.com/api'
export default {
    teachersList: `${API_BASE_URL}/teachers`,
    deleteTeacher: (id) => `${API_BASE_URL}/teachers/${id}`,
    editTeacher: (id) => `${API_BASE_URL}/teachers/${id}`,
    addTeacher: `${API_BASE_URL}/teachers`,
    getTeacherById: (id) => `${API_BASE_URL}/teachers/${id}`
}