import React, { Suspense } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import AboutSection2Skeleton from '../Skeleton/AboutSection2Skeleton';
import AboutSection3Skeleton from '../Skeleton/AboutSection3Skeleton';
import SkeletonAboutTeam from '../Skeleton/SkeletonAboutTeam';

const AboutSection1 = React.lazy(() => import('../components/AboutSection1'));
const AboutSection2 = React.lazy(() => import('../components/AboutSection2'));
const AboutTeam = React.lazy(() => import('../components/AboutTeam'));

const AboutPage = () => {
  return (
    <div className=" px-5 mt-20">
      <ErrorBoundary>
        <Suspense fallback={<AboutSection2Skeleton />}>
          <AboutSection1 />
        </Suspense>
      </ErrorBoundary>

      {/*second section*/}
      <ErrorBoundary>
        <Suspense fallback={<AboutSection3Skeleton />}>
          <AboutSection2 />
        </Suspense>
      </ErrorBoundary>

      {/*the  team */}
      <div className="px-2 mt-20">
        <ErrorBoundary>
          <Suspense fallback={<SkeletonAboutTeam />}>
            <AboutTeam />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default AboutPage;
