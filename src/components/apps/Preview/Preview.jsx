import React from 'react';
import WindowWrapper from '../../hoc/WindowWrapper/index';
import PreviewContent from './components/PreviewContent/index';

const Preview = () => {
    // Usamos BASE_URL para que soporte Github Pages u otros subdirectorios
    const pdfUrl = `${import.meta.env.BASE_URL}CV-Ivan-Castillo-Full-Stack-Developer-v2.pdf`;

    return (
        <WindowWrapper id="preview" title="Vista Previa - CV_Ivan Castillo.pdf" icon="📄" width={800} height={600}>
            <PreviewContent pdfUrl={pdfUrl} />
        </WindowWrapper>
    );
};

export default Preview;
