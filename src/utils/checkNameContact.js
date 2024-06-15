import { toast } from 'react-toastify';

export const checkNameContact = (contacts, name) => {
    const checkName = contacts.some(
        ({ name: nameContact }) =>
            nameContact.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
        toast.warn(`${name}is already in contact`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
        return;
    }
    return !checkName;
}