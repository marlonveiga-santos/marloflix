import React from 'react';
import PageDefault from '../../components/PageDefault';
import './style.css';

export default function Page404() {
    return (
        <>
            <PageDefault>
                <div className="Page404">
                    <iframe
                        src="https://mariosouto.com/flappy-bird-devsoutinho/"
                        title="flappyGame"
                        scrolling="no"
                        style={{
                            width: 340,
                            height: 540,
                            borderWidth: 0,
                        }} />
                </div>
            </PageDefault>
        </>
    )
}