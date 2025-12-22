import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const removeNotification = useCallback((id) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, []);

    const addNotification = useCallback((type, message) => {
        const id = Date.now();
        setNotifications((prev) => [...prev, { id, type, message }]);
        setTimeout(() => removeNotification(id), 5000);
    }, [removeNotification]);

    const notify = {
        success: (msg) => addNotification('success', msg),
        error: (msg) => addNotification('error', msg),
        info: (msg) => addNotification('info', msg),
    };

    return (
        <NotificationContext.Provider value={notify}>
            {children}
            <div className="fixed bottom-4 right-4 z-[70] flex flex-col gap-3 pointer-events-none">
                <AnimatePresence>
                    {notifications.map(({ id, type, message }) => (
                        <Toast key={id} id={id} type={type} message={message} onClose={() => removeNotification(id)} />
                    ))}
                </AnimatePresence>
            </div>
        </NotificationContext.Provider>
    );
};

const Toast = ({ type, message, onClose }) => {
    const icons = {
        success: <CheckCircle className="w-5 h-5 text-emerald-500" />,
        error: <AlertCircle className="w-5 h-5 text-red-500" />,
        info: <Info className="w-5 h-5 text-sky-500" />,
    };

    const styles = {
        success: 'border-emerald-100 bg-emerald-50/90 text-emerald-800',
        error: 'border-red-100 bg-red-50/90 text-red-800',
        info: 'border-sky-100 bg-sky-50/90 text-sky-800',
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            layout
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg backdrop-blur-md min-w-[300px] max-w-md ${styles[type]}`}
        >
            <div className="flex-shrink-0">{icons[type]}</div>
            <p className="flex-grow text-sm font-medium">{message}</p>
            <button onClick={onClose} className="p-1 hover:bg-black/5 rounded-full transition-colors">
                <X className="w-4 h-4 opacity-50" />
            </button>
        </motion.div>
    );
};

export default NotificationProvider;
