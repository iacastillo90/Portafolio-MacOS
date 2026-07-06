import React, { useState, useEffect } from 'react';
import WindowWrapper from '../../hoc/WindowWrapper/index';
import SafariToolbar from './components/SafariToolbar/index';
import SafariContent from './components/SafariContent/index';
import './Safari.css';

const Safari = () => {
    const base = import.meta.env.BASE_URL;
    const [currentUrl, setCurrentUrl] = useState("");
    const [inputValue, setInputValue] = useState("");

    // Synchronize input value with currentUrl
    useEffect(() => {
        setInputValue(currentUrl);
    }, [currentUrl]);

    const favorites = [
        {
            id: 'linkedin',
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/iv%C3%A1n-castillo-iligaray-03b25b243/',
            icon: `${base}img/sites/linkedin.svg`
        },
        {
            id: 'github',
            title: 'GitHub',
            url: 'https://github.com/iacastillo90',
            icon: `${base}img/sites/github.svg`
        },
        {
            id: 'gmail',
            title: 'Gmail',
            url: 'mailto:iacastillo.ili2@gmail.com',
            icon: `${base}img/sites/gmail.svg`
        }
    ];

    const checkURL = (url) => {
        if (!url) return false;
        const pattern = /^(https?:\/\/)?(localhost|([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i;
        return !!pattern.test(url);
    };

    const handleNavigate = (url) => {
        let finalUrl = url;
        if (finalUrl.startsWith('mailto')) {
            window.location.href = finalUrl;
            return;
        }

        const isValid = checkURL(finalUrl);
        if (isValid) {
            if (finalUrl.substring(0, 7) !== "http://" && finalUrl.substring(0, 8) !== "https://") {
                finalUrl = `https://${finalUrl}`;
            }
        } else if (finalUrl !== "") {
            finalUrl = `https://www.google.com/search?q=${finalUrl}`;
        }

        setCurrentUrl(finalUrl);
    };

    const goHome = () => setCurrentUrl("");

    const numTracker = Math.floor(Math.random() * 99 + 1);

    const blockedDomains = ['linkedin.com', 'github.com', 'google.com', 'youtube.com', 'facebook.com', 'twitter.com', 'instagram.com'];
    const isBlockedDomain = blockedDomains.some(domain => currentUrl.includes(domain));

    return (
        <WindowWrapper id="safari" title="Safari" icon="🧭" width={900} height={650}>
            <div className="safari-layout">
                <SafariToolbar
                    currentUrl={currentUrl}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    handleNavigate={handleNavigate}
                    goHome={goHome}
                />
                
                <SafariContent
                    currentUrl={currentUrl}
                    numTracker={numTracker}
                    favorites={favorites}
                    isBlockedDomain={isBlockedDomain}
                    handleNavigate={handleNavigate}
                />
            </div>
        </WindowWrapper>
    );
};

export default Safari;
