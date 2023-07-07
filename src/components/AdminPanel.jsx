import AdminHeader from "./AdminHeader";
import ImagesMenu from "./ImagesMenu";
import UploadForm from "./UploadForm";

const AdminPanel = () => {
	return (
		<div className="mx-auto max-w-[960px]">
			<AdminHeader />
			<UploadForm />
			<ImagesMenu />
		</div>
	);
}

export default AdminPanel;