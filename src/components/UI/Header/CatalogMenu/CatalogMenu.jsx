import cls from "./style.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

//Iocns
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import SpaIcon from "@mui/icons-material/Spa";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ChairIcon from "@mui/icons-material/Chair";
import HomeIcon from "@mui/icons-material/Home";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WomanIcon from "@mui/icons-material/Woman";
import IceSkatingIcon from "@mui/icons-material/IceSkating";
import ManIcon from "@mui/icons-material/Man";
import categoryService from "@/services/categoryServices";
import WebIcon from "@mui/icons-material/Web";
import WatchIcon from "@mui/icons-material/Watch";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FaceIcon from "@mui/icons-material/Face";
import WineBarIcon from "@mui/icons-material/WineBar";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import HighlightIcon from "@mui/icons-material/Highlight";

export default function CatalogMenu({ setOpenCatalog }) {
  const [categoryActive, setCategoryActive] = useState("smartphones");
  const [currentSubcategories, setCurrentSubcategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleCategoryMouseEnter();
  }, [categoryActive]);

  useEffect(() => {
    fetchAllCategories();
  }, []);

  // OpenCatalog

  const closeOpenCatalog = () => {
    setOpenCatalog(false);
  };

  const handleCategoryMouseEnter = (category = categoryActive) => {
    setCategoryActive(category);
    fetchActiveCategory(category);

    // const filteredCategory = categoryList.find(
    //   (categ) => categ.category === category
    // );
    // if (filteredCategory) {
    //   setCurrentSubcategories(filteredCategory.subcategories);
    // } else {
    //   setCurrentSubcategories([]);
    // }
  };

  const fetchAllCategories = () => {
    categoryService
      .getList()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => console.log(err))
  };

  const fetchActiveCategory = (activeCat) => {
    setLoading(true);
    categoryService
      .getProductsCategory(activeCat)
      .then((res) => setCurrentSubcategories(res.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  // const concatCategoriesWithIcons = (array) => {
  //   setCategories(array.map((cat)=> {
  //     return {categoryName: cat, icon: categoryIcons[cat]}
  //   }))
  // }

  // console.log(categories)
  // console.log(currentSubcategories)
  console.log(loading);

  return (
    <div
      className={`absolute top-[80px] right-0 left-0 w-full h-[600px] flex bg-white rounded-lg`}
    >
      <div
        className={`${cls.scrollbar} w-3/12 h-full flex flex-col items-start justify-start gap-4 p-4 overflow-auto`}
      >
        <ul className="w-full">
          {categories.map((categ, i) => (
                <Link href={`/categories/${categ}`} onClick={closeOpenCatalog}>
                  <li
                    key={i}
                    onMouseEnter={() => handleCategoryMouseEnter(categ)}
                    className={`p-4 hover:bg-[#FEF3CC] rounded-lg ${
                      categoryActive === categ && "bg-[#FEF3CC]"
                    }`}
                  >
                    <div className="w-full flex justify-between text-lg">
                      <div className="flex items-center gap-4">
                        {getCategoryIcon(categ)}
                        {categ}
                      </div>
                      <ChevronRightIcon />
                    </div>
                  </li>
                </Link>
          ))}
        </ul>
      </div>
      <div
        className={`${cls.scrollbar} w-9/12 flex flex-col gap-8 p-4 overflow-y-auto`}
      >
        <h2 className="text-xl font-semibold">{categoryActive}</h2>
        <div className="grid grid-cols-4 gap-4">
          {currentSubcategories.map((subcategory) => (
            <>
              <ul className="flex flex-col gap-2 text-[#565656]">
                <li
                  key={subcategory.id}
                  className="hover:underline decoration-solid"
                >
                  {loading ? (
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  ) : (
                    <Link
                      href={`/products/${subcategory.id}`}
                      onClick={closeOpenCatalog}
                    >
                      {subcategory.title}
                    </Link>
                  )}
                </li>
              </ul>

              {/* <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{subcategory.title}</h2>
              <ul className="flex flex-col gap-2 text-[#565656]">
                {subcategory.products.map((product, index) => (
                  <li key={index} className="hover:underline decoration-solid">
                    <Link href="/">{product}</Link>
                  </li>
                ))}
              </ul>
            </div> */}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

const getCategoryIcon = (category) => {
  switch (category) {
    case "smartphones":
      return <PhoneAndroidOutlinedIcon fontSize="medium" />;
    case "laptops":
      return <LaptopMacOutlinedIcon fontSize="medium" />;
    case "fragrances":
      return <WebIcon fontSize="medium" />;
    case "skincare":
      return <SpaIcon fontSize="medium" />;
    case "groceries":
      return <LocalGroceryStoreIcon fontSize="medium" />;
    case "home-decoration":
      return <HomeIcon fontSize="medium" />;
    case "furniture":
      return <ChairIcon fontSize="medium" />;
    case "tops":
      return <CheckroomIcon fontSize="medium" />;
    case "womens-dresses":
      return <WomanIcon fontSize="medium" />;
    case "womens-shoes":
      return <IceSkatingIcon fontSize="medium" />;
    case "mens-shirts":
      return <ManIcon fontSize="medium" />;
    case "mens-shoes":
      return <ManIcon fontSize="medium" />;
    case "mens-watches":
    case "womens-watches":
      return <WatchIcon fontSize="medium" />;
    case "womens-bags":
      return <BusinessCenterIcon fontSize="medium" />;
    case "womens-jewellery":
      return <FaceIcon fontSize="medium" />;
    case "sunglasses":
      return <WineBarIcon fontSize="medium" />;
    case "automotive":
      return <DirectionsCarIcon fontSize="medium" />;
    case "motorcycle":
      return <TwoWheelerIcon fontSize="medium" />;
    case "lighting":
      return <HighlightIcon fontSize="medium" />;
    default:
      return null;
  }
};
