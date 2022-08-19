import { Navigate, Route, Routes as BaseRoutes } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import { Groups } from "./pages/Groups";
import { Users } from "./pages/User";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="groups" element={<Groups />} />
      </Route>
    </BaseRoutes>
  );
}