import { useEffect, useState } from "react";

export function useRealTime() {
    const [time , setTime] = useState(() => new Date());

    useEffect(() => {
        const instervale = setInterval(() => {
            setTime(new Date());
        } , 1000);

        return () => clearInterval(instervale);
    } , []);

    return time.toLocaleTimeString("fr-FR" , {
        hour: "2-digit",
        minute: "2-digit"
    });
}