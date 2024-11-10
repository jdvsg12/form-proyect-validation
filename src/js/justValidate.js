import JustValidate from 'just-validate';

export const validationForm = document.addEventListener('DOMContentLoaded', function () {
    const validation = new JustValidate('#myForm', {
        errorFieldCssClass: 'invalid',
        errorFieldStyle: {
            color: "#b81111",
            border: "1px solid #B81111"
        },
        errorLabelCssClass: 'is-label-invalid',
        errorLabelStyle: {
            color: 'red',
            margin: '0 auto 0 0',
        },
        focusInvalidField: false,
        lockForm: true,
    },);

    validation
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'El nombre es obligatorio',
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'El nombre debe tener al menos 2 caracteres',
            },
            {
                rule: 'maxLength',
                value: 50,
                errorMessage: 'El nombre no puede tener más de 50 caracteres',
            },
            {
                rule: 'customRegexp',
                value: /^[a-zA-Z\s-]+$/,
                errorMessage: 'El nombre solo puede contener letras, espacios y guiones',
            }
        ])
        .addField('#lastName', [
            {
                rule: 'required',
                errorMessage: 'El apellido es obligatorio',
            },
            {
                rule: 'minLength',
                value: 2,
                errorMessage: 'El apellido debe tener al menos 2 caracteres',
            },
            {
                rule: 'maxLength',
                value: 50,
                errorMessage: 'El apellido no puede tener más de 50 caracteres',
            },
            {
                rule: 'customRegexp',
                value: /^[a-zA-Z\s-]+$/,
                errorMessage: 'El apellido solo puede contener letras, espacios y guiones',
            }
        ])
        .addField('#age', [
            {
                rule: 'required',
                errorMessage: 'La edad es obligatoria',
            },
            {
                rule: 'number',
                errorMessage: 'La edad debe ser un número',
            },
            {
                rule: 'minNumber',
                value: 18,
                errorMessage: 'Debes tener al menos 18 años',
            },
            {
                rule: 'maxNumber',
                value: 100,
                errorMessage: 'La edad no puede ser mayor a 100 años',
            },
            {
                rule: 'customRegexp',
                value: /^[0-9]+/,
                errorMessage: 'El apellido solo puede contener letras, espacios y guiones',
            }
        ])
        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'El email es obligatorio',
            },
            {
                rule: 'email',
                errorMessage: 'Por favor ingresa un email válido',
            }
        ])
        .onSuccess((event) => {
            const form = document.getElementById('myForm');
            event.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            console.log(data)

            form.reset();

        });
});
