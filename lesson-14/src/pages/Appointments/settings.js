export const appointmentInputFields = [
    {
        name: 'patient',
        type: 'text',
        placeholder: 'Повне ім’я лікаря',
    },
    {
        name: 'specialty',
        type: 'text',
        placeholder: 'Спеціалізація лікаря',
    },
    {
        name: 'phone',
        type: 'tel',
        placeholder: 'Контактний номер телефону',
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'Електронна адреса пацієнта',
    },
    {
        name: 'room',
        type: 'number',
        placeholder: 'кабінет',
    },
    {
        name: 'notes',
        type: 'textarea',
        placeholder: 'Додаткові примітки (наприклад дні прийому)',
    },
]

export const emptyAppointmentData = {
    patient: '',
    doctor: '',
    date: '',
    reason: '',
    status: '',
}