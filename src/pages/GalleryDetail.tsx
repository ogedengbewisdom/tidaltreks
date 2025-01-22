import { Params, useLoaderData } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import GalleryDetail from "../screens/GalleryDetail";
import { GALLERY } from "../utils/formatDate";

const GalleryDetailPage = () => {
  const data = useLoaderData();

  return (
    <Wrapper title={data.title} bgSrc={data.src[0]}>
      <GalleryDetail data={data} />
    </Wrapper>
  );
};

export const galleryDetailLoader = ({ params }: { params: Params<string> }) => {
  const replacedParams = params.galleryId || "";
  const originalParams = replacedParams.replace(/-/g, " ");
  const galleryDetails = GALLERY.find(
    (item) => item.title.toLowerCase() === originalParams.toLowerCase()
  );

  if (!galleryDetails) {
    throw new Response("Gallery not found", { status: 404 });
  }

  return galleryDetails;
};
export default GalleryDetailPage;
