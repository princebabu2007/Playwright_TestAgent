# Order Product Test Plan

## Application Overview

Test plan for ordering a product on the Demoblaze site using Playwright. Includes the happy path and validation checks for the product order workflow.

## Test Scenarios

### 1. Order Product

**Seed:** `tests/seed.spec.ts`

#### 1.1. Order a product successfully

**File:** `tests/OrderProduct/OrderProduct.spec.ts`

**Steps:**
  1. Open the Demoblaze homepage.
    - expect: Homepage loads successfully.
  2. Open the login form and sign in with valid credentials.
    - expect: Login succeeds and the logout button is visible.
  3. Select the Monitors category.
    - expect: Monitors category page is displayed.
  4. Choose a monitor product from the list.
    - expect: Monitor product detail page is displayed.
  5. Click Add to cart and accept the confirmation dialog.
    - expect: Item is added to the cart successfully.
  6. Navigate to the cart page.
    - expect: Cart contains the selected monitor product.
  7. Click Place Order, fill in purchase details, and confirm the order.
    - expect: Purchase form submits successfully.
  8. Verify the purchase confirmation message.
    - expect: The confirmation message 'Thank you for your purchase!' is shown.

#### 1.2. Verify cart contents before purchase

**File:** `tests/OrderProduct/VerifyCartContents.spec.ts`

**Steps:**
  1. Login with valid credentials and add a monitor to the cart.
    - expect: The product is added to the cart.
  2. Open the cart page.
    - expect: The cart page loads.
  3. Verify the monitor appears in the cart with its correct name and price.
    - expect: The cart shows the correct line item details.

#### 1.3. Validate purchase form error handling

**File:** `tests/OrderProduct/PurchaseFormValidation.spec.ts`

**Steps:**
  1. Login and add a monitor to the cart.
    - expect: The cart contains the selected item.
  2. Open the Place Order form.
    - expect: The order form modal is displayed.
  3. Leave required fields empty and submit the form.
    - expect: The purchase is not completed and validation prevents submission.
