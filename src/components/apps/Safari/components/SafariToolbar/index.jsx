import './SafariToolbar.css';

const SafariToolbar = ({
    currentUrl,
    inputValue,
    setInputValue,
    handleNavigate,
    goHome
}) => {
    return (
        <div className="safari-toolbar">
            <div className="safari-nav-group">
                <button
                    onClick={goHome}
                    disabled={!currentUrl}
                    className="safari-nav-btn"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button disabled className="safari-nav-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>

            <div className="safari-url-container">
                <div className="safari-url-bar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="safari-url-icon"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleNavigate(inputValue);
                        }}
                        placeholder="Buscar o introducir un sitio web"
                        className="safari-url-input"
                    />
                    <button onClick={() => setInputValue(currentUrl)} className="safari-url-clear">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
                    </button>
                </div>
            </div>

            <div className="safari-nav-group">
                <button className="safari-action-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                </button>
                <button className="safari-action-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </button>
            </div>
        </div>
    );
};

export default SafariToolbar;
