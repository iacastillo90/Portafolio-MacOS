import './SafariContent.css';

const SafariContent = ({
    currentUrl,
    numTracker,
    favorites,
    isBlockedDomain,
    handleNavigate
}) => {
    return (
        <div className="safari-content-area">
            {!currentUrl ? (
                <div className="safari-start-page">
                    <div className="safari-start-container">
                        {/* Favorites Section */}
                        <div className="safari-section-title">
                            Sitios Frecuentes
                        </div>
                        <div className="safari-favorites-grid">
                            {favorites.map((site) => (
                                <div key={site.id} className="safari-favorite-item">
                                    <div
                                        className="safari-favorite-icon"
                                        onClick={() => handleNavigate(site.url)}
                                    >
                                        <img src={site.icon} alt={site.title} />
                                    </div>
                                    <span className="safari-favorite-label">
                                        {site.title}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Privacy Report Section */}
                        <div className="safari-privacy-report">
                            <div className="safari-section-title">
                                Reporte de Privacidad
                            </div>
                            <div className="safari-privacy-card">
                                <div className="safari-privacy-icon">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                </div>
                                <div className="safari-privacy-text">
                                    En los últimos 7 días, Safari ha evitado que <span className="safari-privacy-number" style={{marginLeft: '4px', marginRight: '4px', fontSize: '18px'}}>{numTracker}</span> rastreadores sigan tus datos.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="safari-blocked-page">
                    {isBlockedDomain ? (
                        <div className="safari-blocked-card">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            <p className="safari-blocked-title">
                                Sitio Web Protegido
                            </p>
                            <p className="safari-blocked-text">
                                Este sitio (ej. Google, LinkedIn, GitHub) usa políticas de seguridad estrictas (CSP) que bloquean su integración en otras páginas.
                            </p>
                            <a href={currentUrl} target="_blank" rel="noreferrer" className="safari-blocked-btn">
                                Abrir perfil en nueva pestaña
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                        </div>
                    ) : (
                        <iframe
                            src={currentUrl}
                            className="safari-iframe"
                            title="Safari Browser Content"
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default SafariContent;
