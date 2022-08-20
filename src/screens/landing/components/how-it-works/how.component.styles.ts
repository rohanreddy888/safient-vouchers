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
		margin: 4rem 2rem 0rem 2rem;
	}

	@media (max-width: 768px) {
		.steps{
			flex-direction: column;
			margin-top: 4rem;
		}
	}
	/* mobile-device */
	@media (max-width: 576px) {
		padding: 2rem;
		text-align: center;

		.sub-heading {
			margin-top: 1.2rem;
		}
		.steps{
			flex-direction: column;
			margin-top: 4rem;
		}
	}
`;
