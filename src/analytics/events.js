export const trackAddToCart = (product) => {
  if (window.gtag) {
    window.gtag("event", "add_to_cart", {
      debug_mode: true,
      currency: "INR",
      value: product.price,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          item_category:
            product.category || "Product",
          price: product.price,
          quantity: product.quantity || 1,
        },
      ],
    });

    console.log(
      "Add To Cart Event Sent:",
      product.name
    );
  }
};

export const trackWishlist = (product) => {
  if (window.gtag) {
    window.gtag("event", "add_to_wishlist", {
      debug_mode: true,
      currency: "INR",
      value: product.price,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          item_category:
            product.category || "Product",
          price: product.price,
        },
      ],
    });

    console.log(
      "Wishlist Event Sent:",
      product.name
    );
  }
};

export const trackViewItem = (product) => {
  if (window.gtag) {
    window.gtag("event", "view_item", {
      debug_mode: true,
      currency: "INR",
      value: product.price,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          item_category:
            product.category || "Product",
          price: product.price,
        },
      ],
    });

    console.log(
      "View Item Event Sent:",
      product.name
    );
  }
};

export const trackBeginCheckout = (
  value,
  items = []
) => {
  if (window.gtag) {
    window.gtag("event", "begin_checkout", {
      debug_mode: true,
      currency: "INR",
      value,
      items: items.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        item_category:
          item.category || "Product",
        price: item.price,
        quantity: item.quantity,
      })),
    });

    console.log(
      "Begin Checkout Event Sent"
    );
  }
};

export const trackPurchase = (
  value,
  items = []
) => {
  if (window.gtag) {
    const transactionId =
      "ORDER_" + Date.now();

    window.gtag("event", "purchase", {
      debug_mode: true,
      transaction_id: transactionId,
      currency: "INR",
      value,
      items: items.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        item_category:
          item.category || "Product",
        price: item.price,
        quantity: item.quantity,
      })),
    });

    console.log(
      "Purchase Event Sent:",
      transactionId
    );
  } else {
    console.log(
      "GA4 not loaded - purchase not sent"
    );
  }
};

export const trackSearch = (
  searchTerm
) => {
  if (window.gtag) {
    window.gtag("event", "search", {
      debug_mode: true,
      search_term: searchTerm,
    });

    console.log(
      "Search Event Sent:",
      searchTerm
    );
  }
};

export const trackCategoryFilter = (
  category
) => {
  if (window.gtag) {
    window.gtag("event", "select_item", {
      debug_mode: true,
      item_category: category,
    });

    console.log(
      "Category Filter Event Sent:",
      category
    );
  }
};

export const trackViewCart = (
  totalPrice,
  items = []
) => {
  if (window.gtag) {
    window.gtag("event", "view_cart", {
      debug_mode: true,
      currency: "INR",
      value: totalPrice,
      items: items.map((item) => ({
        item_id: item.id,
        item_name: item.name,
        item_category:
          item.category || "Product",
        price: item.price,
        quantity: item.quantity,
      })),
    });

    console.log(
      "View Cart Event Sent"
    );
  }
};

export const trackRemoveFromCart = (
  product
) => {
  if (window.gtag) {
    window.gtag("event", "remove_from_cart", {
      debug_mode: true,
      currency: "INR",
      value: product.price,
      items: [
        {
          item_id: product.id,
          item_name: product.name,
          item_category:
            product.category || "Product",
          price: product.price,
          quantity:
            product.quantity || 1,
        },
      ],
    });

    console.log(
      "Remove From Cart Event Sent:",
      product.name
    );
  }
};

export const trackViewItemList = (
  products
) => {
  if (window.gtag) {
    window.gtag("event", "view_item_list", {
      debug_mode: true,
      item_list_name: "Shop Products",
      items: products.map(
        (product) => ({
          item_id: product.id,
          item_name: product.name,
          item_category:
            product.category ||
            "Product",
          price: product.price,
        })
      ),
    });

    console.log(
      "View Item List Event Sent"
    );
  }
};