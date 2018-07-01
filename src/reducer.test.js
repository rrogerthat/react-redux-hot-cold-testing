import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('reducer', () => { 

	describe('restartGame', () => { 
		it('Should restart game', () => { 
			let state = {
				guesses: [10, 20, 5],
            	feedback: 'You are warm!',
            	auralStatus: '',
            	correctAnswer: 5
			};
			const correctAnswer = 20;
			state = reducer(state, restartGame(correctAnswer));
			expect(state).toEqual({
                guesses: [],
            	feedback: 'Make your guess!',
            	auralStatus: '',
            	correctAnswer: correctAnswer
            });
		});
	});

	describe('makeGuess', () => { 
		it('Should provide feedback after guess', () => { 
			let state = {
				guesses: [25],
            	correctAnswer: 15,
            	feedback: "You're warm.",
            	auralStatus: ''
			};
			const guess = 10;
			state = reducer(state, makeGuess(guess));
			expect(state).toEqual({
                guesses: [25, 10],
            	feedback: "You're Hot!",
            	auralStatus: '',
            	correctAnswer: 15
            });
		});
	});

	describe('generateAuralUpdate', () => { 
		it('Generate aural feedback', () => { 
			let state = {
				guesses: [25, 30, 10],
				feedback: "You're Hot!",
            	correctAnswer: 15,
            	auralStatus: ''
			};
			state = reducer(state, generateAuralUpdate());
			expect(state.auralStatus).toEqual(
            	"Here's the status of the game right now: You're Hot! You've made 3 guesses. In order of most- to least-recent, they are: 10, 30, 25"
            );
		});
	});

});