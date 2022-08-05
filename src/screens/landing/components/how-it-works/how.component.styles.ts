import styled from 'styled-components';

export const HowItWorksContainer = styled.section`
	.sub-heading {
		margin-top: 1rem;
	}

	.steps {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		align-items: center;
		justify-content: space-between;
		margin-top: 8.8rem;
	}

	@media (max-width: 768px) {
	}
	/* mobile-device */
	@media (max-width: 576px) {
		padding: 2rem;
		text-align: center;

		.sub-heading {
			margin-top: 1.2rem;
		}
	}
`;
