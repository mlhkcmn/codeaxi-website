import React, { useState, useEffect } from 'react';
import { MoveUp } from 'lucide-react';

function ToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Sayfanın scroll pozisyonunu izle
    const trackScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', trackScroll);

        // bileşen kaldırıldığında event listener'ı temizle
        return () => {
            window.removeEventListener('scroll', trackScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <MoveUp />
        </div>
    );
}

export default ToTopButton;
