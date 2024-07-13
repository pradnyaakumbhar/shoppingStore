import { fetchUserFavourites } from '@/utils/actions';
import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';

const FavouritesPage = async () => {
  const favourites = await fetchUserFavourites();
  if (favourites.length === 0)
    return <SectionTitle text="You have no favorites yet." />;
  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductsGrid
        products={favourites.map((favourite) => favourite.product)}
      />
    </div>
  );
};

export default FavouritesPage;
