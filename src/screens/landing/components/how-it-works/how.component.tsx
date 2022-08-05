import { Card } from '../common/card/card.component';
import { SubTitle, Title } from '../common/title/title.component';
import { HowItWorksContainer } from './how.component.styles';

export function HowItWorksSection() {
  return (
    <HowItWorksContainer>
      <Title centered>How It Works?</Title>
      <SubTitle centered className="sub-heading">
        We have 3 simple steps 🪜
      </SubTitle>

      <div className="steps">
        <Card
          iconName="create"
          heading="Create Voucher"
          description="Create a voucher of your desired crypto and specific amount with one click"
        />
        <Card
          iconName="transfer"
          heading="Share Voucher"
          description="Share the voucher via a link, chat, email, or even a printed copy"
        />
        <Card
          iconName="redeem"
          heading="Redeem Voucher"
          description="Redeeming the crypto voucher doesn't get easier and safer than this with just a click"
        />
      </div>
    </HowItWorksContainer>
  );
}
