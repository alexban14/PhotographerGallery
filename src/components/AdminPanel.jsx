import AdminHeader from "./AdminHeader";
import UploadForm from "./UploadForm";

const AdminPanel = () => {
	return (
		<div className="mx-auto max-w-[960px]">
			<AdminHeader />
			<UploadForm />
		</div>
	);
}

export default AdminPanel;