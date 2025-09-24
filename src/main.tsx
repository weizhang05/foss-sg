import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'

import '@mantine/core/styles.css';

import {MantineProvider} from '@mantine/core';
import {HashRouter, Route, Routes} from 'react-router';
import Template from './Template.tsx';
// import About from './About.tsx';
// import Events from './Events.tsx';
import SpeakerForm from './SpeakerForm.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider>
            <HashRouter>
                <Routes>
                    <Route element={<Template/>}>
                        <Route path="/" element={<App/>}/>
                        {/*<Route path="/events" element={<Events/>}/>*/}
                        {/*<Route path="/about" element={<About/>}/>*/}
                        <Route path="/be-a-speaker" element={<SpeakerForm/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </MantineProvider>
    </StrictMode>
    ,
)
