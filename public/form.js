const form = document.querySelector('form');
const serviceSelect = document.querySelector('#service-select');
const servicePaths = document.querySelectorAll('.service');

const paths = [
    {
        id: 'carpet-cleaning',
        fn: function () {
            // Contains all the checkboxes for the rooms
            const roomBoxes = document.querySelectorAll(`#${this.id} > label`);

            // When a checkbox is selected, activate any questions on the next level
            for (let roomBox of roomBoxes) {
                roomBox.addEventListener('input', () => {
                    const checkbox = roomBox.firstElementChild;
                    const nextLevel = roomBox.nextElementSibling;
                    if (checkbox.checked) {
                        nextLevel.classList.add('active');
                    } else {
                        nextLevel.classList.remove('active');

                        const inputs = nextLevel.querySelectorAll('input');
                        inputs.forEach(input => {
                            input.checked = false;
                            input.disabled = true;
                        });
                    }
                })
            }
        }
    },

    {
        id: 'tile-cleaning',
        fn: function () {

        }
    },

    {
        id: 'carpet-stretching',
        fn: function () {

        }
    }
];

form.addEventListener('submit', function () {
    const requiredCheckboxes = $('.browsers :checkbox[required]');
    requiredCheckboxes.change(function () {
        if (requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
        } else {
            requiredCheckboxes.attr('required', 'required');
        }
    });
});

const app = function () {
    let servicePath = null; // Will contain <div> with class of "service" and id matching the service type


    serviceSelect.addEventListener('input', () => {

        const serviceType = serviceSelect.value;

        // If the user has already selected an option then changed, remove the original path
        if (servicePath) {
            form.reset(); // Clear all fields the user had filled prior to changing
            form.elements.service.value = serviceType; // To prevent the service value from becoming blank
            servicePath.classList.remove('active');
        }

        // Find the service path with the serviceType variable
        for (service of servicePaths) {
            if (service.id === serviceType) {
                servicePath = service;
                break;
            }
        }

        // Activate the service path
        servicePath.classList.add('active');

        // Activate all inputs
        const activeInputs = document.querySelectorAll('div.service.active input');
        for (let activeInput of activeInputs) {
            activeInput.disabled = false;
        }

        // Disable all inputs not in the active path
        const inactiveInputs = document.querySelectorAll('div.service:not(.active) input');
        for (inactiveInput of inactiveInputs) {
            inactiveInput.disabled = true;
        }

        const path = paths.find(path => path.id === servicePath.id);
        path.fn();
    });

}

app();