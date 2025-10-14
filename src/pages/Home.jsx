import ModelForm from '../component/modelForm';

import WelcomeBanner from '../component/WelcomeBanner';
import ToolCard from '../component/ToolCard';

export default function Home() {
  return (
    <>
      <WelcomeBanner />
      <ToolCard />
      <ModelForm />
    </>
  );
}
