import { useToastHandler } from '../../context/toast-context';
import './ToastHandler.css';

export const ToastHandler = () => {

    const { toastHandler } = useToastHandler();
    const getClassName = (toastHandler) => {
        const className = 'snackbar snackbar-top-right';
        const displayNone = ' display-none';
        if (toastHandler && toastHandler.type) {
            switch (toastHandler.type) {
                case 'danger':
                    return className + ' snackbar-danger';
                case 'success':
                    return className + ' snackbar-success';
                case 'warning':
                    return className + ' snackbar-warning';
                default:
                    return className + displayNone;
            }
        } else {
            return className + displayNone;
        }
    }

    return (
        <div className={getClassName(toastHandler)} id="snackbar-top-center">
            <p>{toastHandler && toastHandler.message}</p>
            <span className="material-icons-outlined snackbar-dismiss" id="snackbar-dismiss">close</span>
        </div >
    );
}