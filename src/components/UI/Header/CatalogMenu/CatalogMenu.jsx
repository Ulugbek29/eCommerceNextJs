import cls from "./style.module.css"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import WebhookIcon from "@mui/icons-material/Webhook";
import SpaIcon from "@mui/icons-material/Spa";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import ChairIcon from "@mui/icons-material/Chair";
import HomeIcon from "@mui/icons-material/Home";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WomanIcon from "@mui/icons-material/Woman";
import IceSkatingIcon from "@mui/icons-material/IceSkating";
import ManIcon from "@mui/icons-material/Man";

export default function CatalogMenu() {
  const [categoryActive, setCategoryActive] = useState("Smartphones");
  const [currentSubcategories, setCurrentSubcategories] = useState([]);

    useEffect(()=> {
        handleCategoryMouseEnter()
    },[categoryActive])

  const handleCategoryMouseEnter = (category=categoryActive) => {
    setCategoryActive(category);

    const filteredCategory = categoryList.find(
      (categ) => categ.category === category
    );
    if (filteredCategory) {
      setCurrentSubcategories(filteredCategory.subcategories);
    } else {
      setCurrentSubcategories([]);
    }
  };

  return (
    <div
      className={`absolute top-[80px] right-0 left-0 w-full h-[600px] flex bg-white rounded-lg`}
    >
      <div className={`${cls.scrollbar} w-3/12 h-full flex flex-col items-start justify-start gap-4 p-4 overflow-auto`}>
        <ul className="w-full">
          {categoryList.map((categ, i) => (
            <li
              key={i}
              onMouseEnter={() => handleCategoryMouseEnter(categ.category)}
              className={`p-4 hover:bg-[#FEF3CC] rounded-lg ${categoryActive ===categ.category && "bg-[#FEF3CC]"}`}
            >
              <Link href="/" className="w-full flex justify-between text-lg">
                <div className="flex items-center gap-4">
                  {categ.icon && <categ.icon fontSize="medium" />}
                  {categ.category}
                </div>
                <ChevronRightIcon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${cls.scrollbar} w-9/12 flex flex-col gap-8 p-4 overflow-y-auto`}>
        <h2 className="text-xl font-semibold">{categoryActive}</h2>
        <div className="grid grid-cols-4 gap-4">
          {currentSubcategories.map((subcategory) => (
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{subcategory.title}</h2>
              <ul className="flex flex-col gap-2 text-[#565656]">
                {subcategory.products.map((product, index) => (
                  <li key={index} className="hover:underline decoration-solid">
                    <Link href="/">{product}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const categoryList = [
  {
    category: "Smartphones",
    icon: PhoneAndroidOutlinedIcon,
    subcategories: [
      {
        title: "Apple",
        products: [
          "iPhone 13 Pro Max",
          "iPhone 13 Pro",
          "iPhone 13",
          "iPhone 12 Pro Max",
          "iPhone 12",
        ],
      },
      {
        title: "Samsung",
        products: [
          "Galaxy S21 Ultra",
          "Galaxy S21",
          "Galaxy Note 20 Ultra",
          "Galaxy Z Fold 3",
          "Galaxy A52",
        ],
      },
      {
        title: "Google",
        products: ["Pixel 6 Pro", "Pixel 6", "Pixel 5a", "Pixel 4a", "Pixel 4"],
      },
      {
        title: "OnePlus",
        products: [
          "OnePlus 9 Pro",
          "OnePlus 9",
          "OnePlus 8T",
          "OnePlus 8 Pro",
          "OnePlus Nord",
        ],
      },
      {
        title: "OnePlus",
        products: [
          "OnePlus 9 Pro",
          "OnePlus 9",
          "OnePlus 8T",
          "OnePlus 8 Pro",
          "OnePlus Nord",
        ],
      },
      {
        title: "OnePlus",
        products: [
          "OnePlus 9 Pro",
          "OnePlus 9",
          "OnePlus 8T",
          "OnePlus 8 Pro",
          "OnePlus Nord",
        ],
      },
      {
        title: "OnePlus",
        products: [
          "OnePlus 9 Pro",
          "OnePlus 9",
          "OnePlus 8T",
          "OnePlus 8 Pro",
          "OnePlus Nord",
        ],
      },
    ],
  },
  {
    category: "Laptops",
    icon: LaptopMacOutlinedIcon,
    subcategories: [
      {
        title: "Apple",
        products: ["MacBook Pro 16-inch", "MacBook Pro 13-inch", "MacBook Air"],
      },
      {
        title: "Dell",
        products: ["XPS 15", "XPS 13", "Dell Inspiron", "Dell Latitude"],
      },
      {
        title: "HP",
        products: ["HP Spectre x360", "HP Envy", "HP Pavilion"],
      },
      {
        title: "Lenovo",
        products: [
          "ThinkPad X1 Carbon",
          "ThinkPad X1 Yoga",
          "ThinkPad T14",
          "IdeaPad 5",
        ],
      },
    ],
  },
  {
    category: "Fragrances",
    icon: WebhookIcon,
    subcategories: [
      {
        title: "Men's Fragrances",
        products: [
          "Dior Sauvage",
          "Chanel Bleu de Chanel",
          "Acqua di Gio by Giorgio Armani",
          "Bleu de Chanel",
          "Yves Saint Laurent La Nuit de l'Homme",
        ],
      },
      {
        title: "Women's Fragrances",
        products: [
          "Chanel No. 5",
          "Dolce & Gabbana Light Blue",
          "Flowerbomb by Viktor & Rolf",
          "Marc Jacobs Daisy",
          "Jo Malone London English Pear & Freesia",
        ],
      },
      {
        title: "Men's Fragrances",
        products: [
          "Dior Sauvage",
          "Chanel Bleu de Chanel",
          "Acqua di Gio by Giorgio Armani",
          "Bleu de Chanel",
          "Yves Saint Laurent La Nuit de l'Homme",
        ],
      },
      {
        title: "Women's Fragrances",
        products: [
          "Chanel No. 5",
          "Dolce & Gabbana Light Blue",
          "Flowerbomb by Viktor & Rolf",
          "Marc Jacobs Daisy",
          "Jo Malone London English Pear & Freesia",
        ],
      },
      {
        title: "Men's Fragrances",
        products: [
          "Dior Sauvage",
          "Chanel Bleu de Chanel",
          "Acqua di Gio by Giorgio Armani",
          "Bleu de Chanel",
          "Yves Saint Laurent La Nuit de l'Homme",
        ],
      },
      {
        title: "Women's Fragrances",
        products: [
          "Chanel No. 5",
          "Dolce & Gabbana Light Blue",
          "Flowerbomb by Viktor & Rolf",
          "Marc Jacobs Daisy",
          "Jo Malone London English Pear & Freesia",
        ],
      },
      {
        title: "Men's Fragrances",
        products: [
          "Dior Sauvage",
          "Chanel Bleu de Chanel",
          "Acqua di Gio by Giorgio Armani",
          "Bleu de Chanel",
          "Yves Saint Laurent La Nuit de l'Homme",
        ],
      },
      {
        title: "Women's Fragrances",
        products: [
          "Chanel No. 5",
          "Dolce & Gabbana Light Blue",
          "Flowerbomb by Viktor & Rolf",
          "Marc Jacobs Daisy",
          "Jo Malone London English Pear & Freesia",
        ],
      },
      {
        title: "Men's Fragrances",
        products: [
          "Dior Sauvage",
          "Chanel Bleu de Chanel",
          "Acqua di Gio by Giorgio Armani",
          "Bleu de Chanel",
          "Yves Saint Laurent La Nuit de l'Homme",
        ],
      },
      {
        title: "Women's Fragrances",
        products: [
          "Chanel No. 5",
          "Dolce & Gabbana Light Blue",
          "Flowerbomb by Viktor & Rolf",
          "Marc Jacobs Daisy",
          "Jo Malone London English Pear & Freesia",
        ],
      },
    ],
  },
  {
    category: "Skincare",
    icon: SpaIcon,
    subcategories: [
      {
        title: "Cleansers",
        products: [
          "Cetaphil Gentle Skin Cleanser",
          "Neutrogena Hydro Boost Hydrating Cleansing Gel",
          "La Roche-Posay Toleriane Hydrating Gentle Cleanser",
        ],
      },
      {
        title: "Moisturizers",
        products: [
          "CeraVe Moisturizing Cream",
          "Neutrogena Hydro Boost Water Gel",
          "Cetaphil Daily Hydrating Lotion",
        ],
      },
      {
        title: "Serums",
        products: [
          "The Ordinary Niacinamide 10% + Zinc 1%",
          "TruSkin Vitamin C Serum",
          "Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant",
        ],
      },
    ],
  },
  {
    category: "Groceries",
    icon: LocalGroceryStoreIcon,
    subcategories: [
      {
        title: "Produce",
        products: ["Apples", "Bananas", "Strawberries", "Spinach", "Tomatoes"],
      },
      {
        title: "Dairy",
        products: ["Milk", "Cheese", "Yogurt", "Butter", "Eggs"],
      },
      {
        title: "Snacks",
        products: ["Chips", "Popcorn", "Granola Bars", "Nuts", "Pretzels"],
      },
    ],
  },
  {
    category: "Home-decoration",
    icon: HomeIcon,
    subcategories: [
      {
        title: "Wall Decor",
        products: [
          "Wall Art",
          "Mirrors",
          "Wall Clocks",
          "Tapestries",
          "Wall Decals",
        ],
      },
      {
        title: "Home Accents",
        products: [
          "Candles",
          "Vases",
          "Decorative Bowls",
          "Sculptures",
          "Bookends",
        ],
      },
    ],
  },
  {
    category: "Furniture",
    icon: ChairIcon,
    subcategories: [
      {
        title: "Living Room Furniture",
        products: [
          "Sofas",
          "Coffee Tables",
          "Accent Chairs",
          "TV Stands",
          "Ottomans",
        ],
      },
      {
        title: "Bedroom Furniture",
        products: [
          "Beds",
          "Dressers",
          "Nightstands",
          "Mattresses",
          "Bed Frames",
        ],
      },
    ],
  },
  {
    category: "Tops",
    icon: CheckroomIcon,
    subcategories: [
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "Blouses",
        products: [
          "Silk Blouse",
          "Button-down Blouse",
          "Wrap Blouse",
          "Peplum Blouse",
          "Printed Blouse",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "Blouses",
        products: [
          "Silk Blouse",
          "Button-down Blouse",
          "Wrap Blouse",
          "Peplum Blouse",
          "Printed Blouse",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "Blouses",
        products: [
          "Silk Blouse",
          "Button-down Blouse",
          "Wrap Blouse",
          "Peplum Blouse",
          "Printed Blouse",
        ],
      },
      {
        title: "T-shirts",
        products: [
          "Plain White Tee",
          "Graphic Tee",
          "V-neck Tee",
          "Long Sleeve Tee",
          "Striped Tee",
        ],
      },
      {
        title: "Blouses",
        products: [
          "Silk Blouse",
          "Button-down Blouse",
          "Wrap Blouse",
          "Peplum Blouse",
          "Printed Blouse",
        ],
      },
    ],
  },
  {
    category: "Womens-dresses",
    icon: WomanIcon,
    subcategories: [
      {
        title: "Casual Dresses",
        products: [
          "Sundress",
          "T-shirt Dress",
          "Shift Dress",
          "Wrap Dress",
          "Maxi Dress",
        ],
      },
      {
        title: "Formal Dresses",
        products: [
          "Cocktail Dress",
          "Evening Gown",
          "A-line Dress",
          "Sheath Dress",
          "Bodycon Dress",
        ],
      },
    ],
  },
  {
    category: "Womens-shoes",
    icon: IceSkatingIcon,
    subcategories: [
      {
        title: "Heels",
        products: [
          "Stiletto Heels",
          "Block Heels",
          "Wedge Heels",
          "Platform Heels",
          "Ankle Strap Heels",
        ],
      },
      {
        title: "Flats",
        products: [
          "Ballet Flats",
          "Loafers",
          "Espadrilles",
          "Mules",
          "Slip-on Sneakers",
        ],
      },
    ],
  },
  {
    category: "Mens-shirts",
    icon: ManIcon,
    subcategories: [
      {
        title: "Dress Shirts",
        products: [
          "White Dress Shirt",
          "Blue Dress Shirt",
          "Striped Dress Shirt",
          "Checked Dress Shirt",
          "French Cuff Dress Shirt",
        ],
      },
      {
        title: "Casual Shirts",
        products: [
          "Button-down Shirt",
          "Polo Shirt",
          "Henley Shirt",
          "Flannel Shirt",
          "Chambray Shirt",
        ],
      },
      {
        title: "Dress Shirts",
        products: [
          "White Dress Shirt",
          "Blue Dress Shirt",
          "Striped Dress Shirt",
          "Checked Dress Shirt",
          "French Cuff Dress Shirt",
        ],
      },
      {
        title: "Casual Shirts",
        products: [
          "Button-down Shirt",
          "Polo Shirt",
          "Henley Shirt",
          "Flannel Shirt",
          "Chambray Shirt",
        ],
      },
      {
        title: "Dress Shirts",
        products: [
          "White Dress Shirt",
          "Blue Dress Shirt",
          "Striped Dress Shirt",
          "Checked Dress Shirt",
          "French Cuff Dress Shirt",
        ],
      },
      {
        title: "Casual Shirts",
        products: [
          "Button-down Shirt",
          "Polo Shirt",
          "Henley Shirt",
          "Flannel Shirt",
          "Chambray Shirt",
        ],
      },
    ],
  },
];
