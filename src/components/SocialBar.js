import React from 'react';

export default class SocialBar extends React.Component { 
    render() {
        return <div className="social-bar">
                    <ul>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/collin-bowers/" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="29px" height="29px">
                                <title>LinkedIn</title>
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/collinbowers" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="29px" height="29px">
                                <title>GitHub</title>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/collin.pb/" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="29px" height="29px">
                                <title>Instagram</title>
                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/projects" aria-label="Projects">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="29px" height="29px">
                                <title>Projects</title>
                                <path d="M22 8.51v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm5.521 1.544l1.57-1.743 1.019.918-1.603 1.777c-.25-.297-.593-.672-.986-.952zm-10.738.952l-1.603-1.777 1.019-.918 1.57 1.743c-.392.28-.736.655-.986.952zm-1.597 5.429h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681zm9.462 9.118h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-1.989c-.003-1.858.87-3.389 1.721-4.867.761-1.325 1.482-2.577 1.482-3.932 0-2.592-2.075-3.772-4.003-3.772-1.925 0-3.997 1.18-3.997 3.772 0 1.355.721 2.607 1.482 3.932.851 1.478 1.725 3.009 1.72 4.867h-1.988c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772z"/>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/contact" aria-label="Contact Me">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="29px" height="29px">
                                <title>Contact Me</title>
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href= "https://collinbowers.github.io/resume/" aria-label="Resume">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="29px" height="29px">
                                <title>Resume</title>
                                <g>
                                    <path d="M35.84,113.9c-0.06-1.56-0.29-3.12-0.66-4.65c-1.49-6.03-5.27-11.54-9.93-15.54c-0.18-0.16-0.36-0.31-0.55-0.46l-4.2,4.1 c3.24,2.48,5.58,5.88,6.54,9.05c0.52,1.72,0.67,3.41,0.38,4.93c-0.33,1.74-1.19,3.23-2.66,4.31c-0.33,0.24-0.68,0.45-1.06,0.64 c1.88,0.93,3.65,1.51,5.18,1.63c1.54,0.13,2.89-0.15,4.03-0.84C34,116.41,34.97,115.36,35.84,113.9L35.84,113.9z M78.92,71.24 c-0.4-0.21-0.72-0.51-0.95-0.87l-0.79,0.78c0.29,0.19,0.54,0.44,0.73,0.74c4.08,6.44,6.43,12.99,6.65,19.67 c0.22,6.71-1.71,13.45-6.19,20.25c-0.75,1.14-2.27,1.45-3.41,0.7s-1.45-2.27-0.7-3.41c3.89-5.9,5.57-11.69,5.38-17.39 c-0.19-5.73-2.27-11.45-5.89-17.17l-6.27,6.18c-0.06-0.19-0.12-0.37-0.18-0.56l-0.48,0.47l-26.39,35.19 c-1.35,2.47-3.01,4.28-4.97,5.46c-2.07,1.24-4.39,1.75-6.95,1.54c-3.91-0.32-8.86-2.76-13.5-6.31c-0.15-0.09-0.3-0.2-0.42-0.33 c-1.6-1.25-3.15-2.62-4.61-4.08c-3.31-3.31-6.18-7.11-7.96-10.89c-1.92-4.07-2.61-8.18-1.35-11.83c0.81-2.34,2.39-4.42,4.91-6.08 l36.99-28.15l20.01-21.39L86.1,1.36c0.4-0.55,0.98-0.88,1.6-0.99c3.44-0.66,6.94-0.41,10.34,0.53c5.84,1.61,11.37,5.27,15.68,9.88 c4.32,4.62,7.46,10.24,8.53,15.74c0.58,2.98,0.55,5.94-0.22,8.72c-0.15,0.56-0.49,1.03-0.93,1.35l0,0.01L85.7,62.21l-1.42,1.39 c0,0.19-0.01,0.38-0.02,0.57l-2.85,2.81c5.22,2.73,9.45,6.16,12.54,10.41c3.16,4.35,5.11,9.5,5.66,15.56 c0.12,1.35-0.88,2.55-2.23,2.67c-1.35,0.12-2.55-0.88-2.67-2.23c-0.47-5.14-2.09-9.48-4.73-13.11 C87.31,76.63,83.58,73.64,78.92,71.24L78.92,71.24z M20.57,90.39c-3.36-1.94-6.88-3.05-10.14-3.03c-0.83,0.01-1.65,0.09-2.45,0.26 C6.59,88.6,5.73,89.75,5.29,91c-0.8,2.31-0.25,5.16,1.15,8.12c1.53,3.26,4.06,6.57,7,9.52c1.23,1.23,2.53,2.4,3.85,3.45 c2.27,0.38,3.74,0.16,4.55-0.44c0.39-0.29,0.63-0.72,0.73-1.24c0.14-0.74,0.05-1.63-0.25-2.59c-0.88-2.91-3.42-6.1-6.89-7.89 c-1.21-0.62-1.69-2.1-1.07-3.31c0.13-0.25,0.29-0.46,0.48-0.64L20.57,90.39L20.57,90.39z M65.02,75.5 c-3.92-6.44-11.06-13.32-17.98-17.96l-0.96,1.03c-0.12,0.15-0.27,0.29-0.43,0.42l-31.3,23.82c3.9,0.74,7.88,2.55,11.52,5.14 l0.09,0.07l0.01,0.01c0.84,0.6,1.66,1.25,2.46,1.93c5.39,4.62,9.77,11.03,11.51,18.1l0.03,0.12l22.92-30.56 c0.09-0.14,0.2-0.27,0.33-0.39L65.02,75.5L65.02,75.5z M64.12,39.29c8.91,4.41,16.34,11.56,19.05,18.66l34.3-24.82 c0.35-1.79,0.31-3.71-0.07-5.68c-0.89-4.58-3.58-9.34-7.29-13.31c-3.73-3.99-8.44-7.14-13.36-8.49c-2.4-0.66-4.84-0.89-7.25-0.57 L66.49,36.74l-0.01-0.01c-0.06,0.08-0.12,0.16-0.2,0.24L64.12,39.29L64.12,39.29z"/>
                                </g>
                            </svg>
                            </a>
                        </li>
                    </ul>
                </div>
    }
}