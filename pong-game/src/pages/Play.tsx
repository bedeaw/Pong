import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";

const Play: React.FC = () => {
    useEffect(() => {
        let gameState = 'start';
        const paddle_1 = document.querySelector('.paddle_1') as HTMLElement | null;
        const paddle_2 = document.querySelector('.paddle_2') as HTMLElement | null;
        const board = document.querySelector('.board') as HTMLElement | null;
        const initial_ball = document.querySelector('.ball') as HTMLElement | null;
        const ball = document.querySelector('.ball') as HTMLElement | null;
        const score_1 = document.querySelector('.player_1_score') as HTMLElement | null;
        const score_2 = document.querySelector('.player_2_score') as HTMLElement | null;
        const message = document.querySelector('.message') as HTMLElement | null;
        const paddle_common = document.querySelector('.paddle')?.getBoundingClientRect();

        if (!paddle_1 || !paddle_2 || !board || !initial_ball || !ball || !score_1 || !score_2 || !message || !paddle_common) {
            console.error("One or more elements were not found");
            return;
        }

        let paddle_1_coord = paddle_1.getBoundingClientRect();
        let paddle_2_coord = paddle_2.getBoundingClientRect();
        let initial_ball_coord = ball.getBoundingClientRect();
        let ball_coord = initial_ball_coord;
        let board_coord = board.getBoundingClientRect();

        let dx = Math.floor(Math.random() * 4) + 3;
        let dy = Math.floor(Math.random() * 4) + 3;
        let dxd = Math.floor(Math.random() * 2);
        let dyd = Math.floor(Math.random() * 2);

        const moveBall = (dx: number, dy: number, dxd: number, dyd: number) => {
            if (ball_coord.top <= board_coord.top) {
                dyd = 1;
            }
            if (ball_coord.bottom >= board_coord.bottom) {
                dyd = 0;
            }
            if (
                ball_coord.left <= paddle_1_coord.right &&
                ball_coord.top >= paddle_1_coord.top &&
                ball_coord.bottom <= paddle_1_coord.bottom
            ) {
                dxd = 1;
                dx = Math.floor(Math.random() * 4) + 3;
                dy = Math.floor(Math.random() * 4) + 3;
            }
            if (
                ball_coord.right >= paddle_2_coord.left &&
                ball_coord.top >= paddle_2_coord.top &&
                ball_coord.bottom <= paddle_2_coord.bottom
            ) {
                dxd = 0;
                dx = Math.floor(Math.random() * 4) + 3;
                dy = Math.floor(Math.random() * 4) + 3;
            }
            if (
                ball_coord.left <= board_coord.left ||
                ball_coord.right >= board_coord.right
            ) {
                if (ball_coord.left <= board_coord.left) {
                    score_2.innerHTML = (parseInt(score_2.innerHTML) + 1).toString();
                } else {
                    score_1.innerHTML = (parseInt(score_1.innerHTML) + 1).toString();
                }
                gameState = 'start';

                ball_coord = initial_ball_coord;
                ball.style.cssText = initial_ball.style.cssText;
                message.innerHTML = 'Press Enter to Play Pong';
                message.style.left = '38vw';
                return;
            }
            ball.style.top = ball_coord.top + dy * (dyd === 0 ? -1 : 1) + 'px';
            ball.style.left = ball_coord.left + dx * (dxd === 0 ? -1 : 1) + 'px';
            ball_coord = ball.getBoundingClientRect();
            requestAnimationFrame(() => {
                moveBall(dx, dy, dxd, dyd);
            });
        }

        const keydownHandler = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                gameState = gameState === 'start' ? 'play' : 'start';
                if (gameState === 'play') {
                    message.innerHTML = 'Game Started';
                    message.style.left = '42vw';
                    requestAnimationFrame(() => {
                        dx = Math.floor(Math.random() * 4) + 3;
                        dy = Math.floor(Math.random() * 4) + 3;
                        dxd = Math.floor(Math.random() * 2);
                        dyd = Math.floor(Math.random() * 2);
                        moveBall(dx, dy, dxd, dyd);
                    });
                }
            }
            if (gameState === 'play') {
                if (e.key === 'w') {
                    paddle_1.style.top =
                        Math.max(
                            board_coord.top,
                            paddle_1_coord.top - window.innerHeight * 0.06
                        ) + 'px';
                    paddle_1_coord = paddle_1.getBoundingClientRect();
                }
                if (e.key === 's') {
                    paddle_1.style.top =
                        Math.min(
                            board_coord.bottom - paddle_common.height,
                            paddle_1_coord.top + window.innerHeight * 0.06
                        ) + 'px';
                    paddle_1_coord = paddle_1.getBoundingClientRect();
                }

                if (e.key === 'ArrowUp') {
                    paddle_2.style.top =
                        Math.max(
                            board_coord.top,
                            paddle_2_coord.top - window.innerHeight * 0.1
                        ) + 'px';
                    paddle_2_coord = paddle_2.getBoundingClientRect();
                }
                if (e.key === 'ArrowDown') {
                    paddle_2.style.top =
                        Math.min(
                            board_coord.bottom - paddle_common.height,
                            paddle_2_coord.top + window.innerHeight * 0.1
                        ) + 'px';
                    paddle_2_coord = paddle_2.getBoundingClientRect();
                }
            }
        }

        document.addEventListener('keydown', keydownHandler);

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener('keydown', keydownHandler);
        };
    }, []);

    return (
        <div className="App">
            <div className="main"></div>
            <div id='Play-Page'>
                <p>
                    <Link to="/" className="Home-Logo"><IoHomeOutline /></Link>
                </p>
                <div className="board">
                    <div className="ball">
                        <div className="ball_effect"></div>
                    </div>
                    <div className="paddle_1 paddle"></div>
                    <div className="paddle_2 paddle"></div>
                    <h1 className="player_1_score">0</h1>
                    <h1 className="player_2_score">0</h1>
                    <h1 className="message">
                        Press Enter to Play Pong
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Play;
