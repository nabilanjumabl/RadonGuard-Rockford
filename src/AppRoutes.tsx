import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ShortTermTestingPage } from './pages/ShortTermTestingPage';
import { MitigationPage } from './pages/MitigationPage';
import { RealEstatePage } from './pages/RealEstatePage';
import { PostMitigationPage } from './pages/PostMitigationPage';
import { CommercialPage } from './pages/CommercialPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { ToolsPage } from './pages/ToolsPage';
import { RadonRiskCalculatorPage } from './pages/RadonRiskCalculatorPage';
import { TestingCostEstimatorPage } from './pages/TestingCostEstimatorPage';
import { MitigationCostCalculatorPage } from './pages/MitigationCostCalculatorPage';
import { RetestTimingToolPage } from './pages/RetestTimingToolPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/short-term-testing" element={<ShortTermTestingPage />} />
      <Route path="/services/mitigation" element={<MitigationPage />} />
      <Route path="/services/real-estate" element={<RealEstatePage />} />
      <Route path="/services/post-mitigation" element={<PostMitigationPage />} />
      <Route path="/services/commercial" element={<CommercialPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="/radon-risk-calculator" element={<RadonRiskCalculatorPage />} />
      <Route path="/radon-testing-cost-calculator" element={<TestingCostEstimatorPage />} />
      <Route path="/radon-mitigation-cost-calculator" element={<MitigationCostCalculatorPage />} />
      <Route path="/radon-retest-calculator" element={<RetestTimingToolPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

// Static list of real (non-wildcard) routes, used by the static-site generator
// to know which pages to pre-render. Keep in sync with the routes above.
export const staticRoutes = [
  '/',
  '/services/short-term-testing',
  '/services/mitigation',
  '/services/real-estate',
  '/services/post-mitigation',
  '/services/commercial',
  '/contact',
  '/about',
  '/tools',
  '/radon-risk-calculator',
  '/radon-testing-cost-calculator',
  '/radon-mitigation-cost-calculator',
  '/radon-retest-calculator',
];
