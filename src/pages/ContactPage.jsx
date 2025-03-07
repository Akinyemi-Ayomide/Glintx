import React, { Suspense } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import FormContactSkeleton from '../Skeleton/FormContactSkeleton';
import BannerContactSkeleton from '../Skeleton/BannerContactSkeleton';
import ContactDetailsSkeleton from '../Skeleton/ContactDetailsSkeleton';

const ContactPageDetail = React.lazy(() =>
  import('../components/ContactPageDetail'),
);
const FormContactPage = React.lazy(() =>
  import('../components/FormContactPage'),
);
const BannerContactPage = React.lazy(() =>
  import('../components/BannerContactPage'),
);
const ContactPage = () => {
  return (
    <div className="px-5 mt-20">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {/* contact form */}
        <ErrorBoundary>
          <Suspense fallback={<FormContactSkeleton />}>
            <FormContactPage />
          </Suspense>
        </ErrorBoundary>

        {/*second grid*/}
        <ErrorBoundary>
          <Suspense fallback={<BannerContactSkeleton />}>
            <BannerContactPage />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary>
          <Suspense fallback={<ContactDetailsSkeleton />}>
            <ContactPageDetail />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default ContactPage;
