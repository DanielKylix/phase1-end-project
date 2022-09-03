import "./App.css";
import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const Home = lazy(() => import("./components/Home/Home"));
  const GarbageSign = lazy(() => import("./components/GarbageCollector/Sign"));
  const CustomerSign = lazy(() => import("./components/customer/Sign"));
  const SchedulePickUp = lazy(() => import("./components/customer/pickUp"));
  const CustomerBooking = lazy(() => import("./components/customer/Booking"));
  const BookingsMade = lazy(() =>
    import("./components/GarbageCollector/BookingsMade")
  );
  const Dashboard = lazy(() => import("./components/Admin/dashboard"));
  const AcceptedOrders = lazy(() =>
    import("./components/GarbageCollector/AcceptedOrders")
  );
  const AcceptedBookings = lazy(() =>
    import("./components/customer/acceptedBookings")
  );
  const AdminSign = lazy(() => import("./components/Admin/Admin"));
  const CustomersData = lazy(() => import("./components/Admin/customers"));
  const VendorsData = lazy(() => import("./components/Admin/vendors"));
  const BookingsData = lazy(() => import("./components/Admin/bookings"));
  const CustomerPayment = lazy(() => import("./components/customer/Payment"));
  const PaymentsMade = lazy(() =>
    import("./components/GarbageCollector/paymentsMade")
  );
  const AcceptedPayments = lazy(() =>
    import("./components/customer/acceptedPayments")
  );
  const Banner = lazy(() => import("./components/Home/banner"));

  return (
    <div>
      <Suspense
        fallback={
          <div className="spinner-border mt-3 mb-3 text-center" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/garbage/sign" exact element={<GarbageSign />} />
          <Route path="/customer/sign" element={<CustomerSign />} />
          <Route path="/customer/pickup" element={<SchedulePickUp />} />
          <Route path="/customer/booking" element={<CustomerBooking />} />
          <Route path="/vendor/booking" element={<BookingsMade />} />
          <Route path="/vendor/accepted-orders" element={<AcceptedOrders />} />
          <Route path="/vendor/payments" element={<PaymentsMade />} />
          <Route
            path="/customer/accepted-orders"
            element={<AcceptedBookings />}
          />
          <Route path="/customer/payment" element={<CustomerPayment />} />
          <Route
            path="/customer/accepted-payment"
            element={<AcceptedPayments />}
          />
          <Route path="/admin" exact element={<AdminSign />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customers" exact element={<CustomersData />} />
          <Route path="/admin/vendors" element={<VendorsData />} />
          <Route path="/admin/bookings" element={<BookingsData />} />
          <Route path="/banner" element={<Banner />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
