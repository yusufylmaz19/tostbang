import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

function useSessionHook() {
    const [isAdmin, setIsAdmin] = useState(false);
    const { data: session } = useSession({
        required: false,
    });

    const role = session?.user.role === 'admin';

    useEffect(() => {
        setIsAdmin(role);
    }, [role, session]);

    return { session, isAdmin };
}

export default useSessionHook;