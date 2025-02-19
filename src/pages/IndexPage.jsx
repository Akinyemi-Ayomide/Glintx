import React, { Suspense } from 'react';
// import HeroSection from '../components/HeroSection';

const Section1 = React.lazy(() => import('../components/Section1'));
//const Partner = React.lazy(() => import('../components/Partner'));
const HeroSection = React.lazy(() => import('../components/HeroSection'));
const Section2 = React.lazy(() => import('../components/Section2'));
const OurProduct = React.lazy(() => import('../components/OurProduct'));
const Section3 = React.lazy(() => import('../components/Section3'));
const Gallery = React.lazy(() => import('../components/Gallery'));
import ErrorBoundary from '../components/ErrorBoundary';
import HeroSkeleton from '../Skeleton/HeroSkeleton';
import Section1Skeleton from '../Skeleton/Section1Skeleton';
//import PartnerSkeleton from '../Skeleton/PartnerSkeleton';
import OurProductSkeleton from '../Skeleton/OurProductSkeleton';
import SkeletonSection2 from '../Skeleton/SkeletonSection1';
import SkeletonSection3 from '../Skeleton/SkeletonSection3';
import GallerySkeleton from '../Skeleton/GallerySkeleton';

const IndexPage = () => {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<HeroSkeleton />}>
          <HeroSection />
        </Suspense>
      </ErrorBoundary>
      <div className="px-5">
        {' '}
        <ErrorBoundary>
          <Suspense fallback={<Section1Skeleton />}>
            <Section1 />
          </Suspense>
        </ErrorBoundary>
        {/*<ErrorBoundary>
          <Suspense fallback={<PartnerSkeleton />}>
            {' '}
            <Partner />
          </Suspense>
        </ErrorBoundary>{' '}*/}
        <ErrorBoundary>
          <Suspense fallback={<OurProductSkeleton />}>
            <OurProduct />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SkeletonSection2 />}>
            <Section2 />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<SkeletonSection3 />}>
            <Section3 />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<GallerySkeleton />}>
            <Gallery />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default IndexPage;
