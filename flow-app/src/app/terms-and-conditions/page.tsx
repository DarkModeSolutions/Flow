"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TermsAndConditions = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-center mb-6">
        Terms and Conditions
      </h1>
      <div className="flex flex-col gap-6">
        <Accordion type="multiple">
          <h3 className="text-lg font-semibold mb-2">PRIVACY POLICY</h3>
          <AccordionItem value="item-1">
            <AccordionTrigger>Information We Collect</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Personal Details: Name, phone number, email, address, and
                  payment details.
                </li>
                <li>
                  Technical Data: IP address, browser type, device information,
                  and cookies.
                </li>
                <li>
                  Order Data: Purchase history, delivery instructions, and
                  feedback.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How We Use Your Information</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>To process and deliver your order.</li>
                <li>To provide customer support and updates.</li>
                <li>For internal business analytics and improvements.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Sharing of Data</AccordionTrigger>
            <AccordionContent>
              <p>We do not sell your data. It may be shared with:</p>
              <ul>
                <li>Delivery partners.</li>
                <li>Payment processors.</li>
                <li>Customer support platforms.</li>
                <li>Authorities if legally required.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Cookies</AccordionTrigger>
            <AccordionContent>
              <p>
                We use cookies to improve your browsing experience. You can
                adjust cookie preferences in your browser settings.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Data Security</AccordionTrigger>
            <AccordionContent>
              <p>
                We use encryption and security protocols, but no system is
                completely secure. Please exercise caution.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Your Rights</AccordionTrigger>
            <AccordionContent>
              <p>You may request:</p>
              <ul>
                <li>Access to your data.</li>
                <li>Correction or deletion.</li>
                <li>Withdrawal of consent for marketing communication.</li>
              </ul>
              <p>
                Email us at{" "}
                <u>
                  <b>support@flowhydration.in</b>
                </u>{" "}
                for such requests.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="multiple">
          <h3 className="text-lg font-semibold mb-2">TERMS AND CONDITIONS</h3>
          <AccordionItem value="item-1">
            <AccordionTrigger>Overview</AccordionTrigger>
            <AccordionContent>
              <p>
                By using our website and placing an order, you agree to the
                terms listed below. These terms apply to all users in India.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Orders & Pricing</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Prices are listed in INR and are inclusive of applicable
                  taxes.
                </li>
                <li>
                  Orders are confirmed only after payment is successfully
                  processed.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Cancellation Policy</AccordionTrigger>
            <AccordionContent>
              <p>
                <b>
                  <u>Orders once placed cannot be cancelled.</u>
                </b>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Cookies</AccordionTrigger>
            <AccordionContent>
              <p>
                We use cookies to improve your browsing experience. You can
                adjust cookie preferences in your browser settings.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Refunds & Returns</AccordionTrigger>
            <AccordionContent>
              <p>
                Refunds or replacements are only applicable in the following
                cases:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>The product is damaged, leaked, or defective.</li>
                <li>
                  Photographic proof is required within 24 hours of delivery.
                </li>
                <li>
                  Approved refunds will be processed to the original payment
                  method within 7–10 working days.
                </li>
              </ul>
              <p>
                We do <b>not</b> offer returns for reasons like personal taste
                or change of mind.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              How to Request a refund / return
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Submit a return request via{" "}
                <b>
                  <u>contact@flowhydration.in</u>
                </b>{" "}
                with your order details. Refunds /Returns (if eligible) will be
                processed within 5 business days to the original payment method.
                For further assistance contact{" "}
                <b>
                  <u>contact@flowhydration.in</u>
                </b>
                .
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Intellectual Property</AccordionTrigger>
            <AccordionContent>
              <p>
                All logos, branding, and content are property of Podium
                performance LLP and may not be reused without permission.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="multiple">
          <h3 className="text-lg font-semibold mb-2">COOKIE POLICY</h3>
          <AccordionItem value="item-1">
            <AccordionTrigger>What are Cookies?</AccordionTrigger>
            <AccordionContent>
              <p>
                Cookies are small text files that are stored on your device
                (computer, tablet, or mobile) when you visit our website. They
                help us enhance your browsing experience, remember your
                preferences, and understand how users interact with our website.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Types of Cookies We Use</AccordionTrigger>
            <AccordionContent>
              <ol className="list-[lower-alpha] list-inside space-y-2 pl-4">
                <li>
                  <b>Essential Cookies</b> <br />
                  These cookies are necessary for the website to function and
                  cannot be switched off in our systems.
                  <br />
                  They include:
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Remembering items in your cart</li>
                    <li>Logging into your account</li>
                    <li>Secure checkout process</li>
                  </ul>
                </li>
                <li>
                  <b>Performance & Analytics Cookies</b> <br />
                  These cookies help us understand how users interact with our
                  website by collecting anonymous data (e.g., Google Analytics).
                  <br />
                  They allow us to improve the website’s performance and user
                  experience.
                </li>
                <li>
                  <b>Functional Cookies</b> <br />
                  These cookies remember your preferences and settings, such as:
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Language selection</li>
                    <li>Location or delivery pin code preferences</li>
                  </ul>
                </li>
                <li>
                  <b>Marketing Cookies (if used)</b> <br />
                  These track your activity across the site and help us show
                  relevant ads via platforms like Google or Facebook (only if
                  you’ve opted in).
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How You Can Control Cookies</AccordionTrigger>
            <AccordionContent>
              <p>
                Most browsers allow you to manage your cookie preferences
                through settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Accept all cookies</li>
                <li>Reject all cookies</li>
                <li>Set preferences for specific sites</li>
              </ul>
              <p>
                Note: Disabling certain cookies may affect website
                functionality, such as cart, login, or checkout.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Third-Party Cookies</AccordionTrigger>
            <AccordionContent>
              <p>
                Some cookies may be placed by third-party services used on our
                website, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Payment gateways</li>
                <li>Social media sharing tools</li>
                <li>Analytics providers</li>
              </ul>
              <p>
                We are not responsible for the cookie policies of these external
                sites, and we recommend reviewing their policies directly.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Updates to This Policy</AccordionTrigger>
            <AccordionContent>
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in technology, law, or our business practices. Any
                updates will be posted on this page with the revised effective
                date.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="multiple">
          <h3 className="text-lg font-semibold mb-2">REFUND POLICY</h3>
          <p className="mt-8">
            <i>
              We strive to ensure a high-quality experience for every customer.
              Due to the perishable and consumable nature of our products, we do
              not accept returns or cancellations under normal circumstances.
              Refunds or returns are processed only under specific conditions
              outlined below.
            </i>
          </p>
          <h4 className="mt-5">✅ Eligible Cases for Refund or Return</h4>
          <div className="mt-4 mb-7">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Defective or Damaged Product Delivery
              </AccordionTrigger>
              <AccordionContent>
                <p>You are eligible for a refund or replacement only if:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    The product delivered is{" "}
                    <b>physically damaged, defective, leaking</b>, or{" "}
                    <b>spoiled at the time of delivery</b>.
                  </li>
                  <li>
                    <b>Clear photographic proof</b> is submitted to our customer
                    support team <b>within 24 hours of delivery</b>.
                  </li>
                </ul>
                <p>Upon verification, we will offer:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    A full refund to the original payment method, <b>or</b>
                  </li>
                  <li>A replacement of the same product at no extra cost.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Technical or Payment Errors</AccordionTrigger>
              <AccordionContent>
                <p>If you are charged for a payment and:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    The order is not confirmed or not reflected in your order
                    history,
                  </li>
                  <li>
                    Or if a technical error (e.g., payment gateway glitch,
                    duplicate charge) occurs,
                  </li>
                </ul>
                <p>
                  You may request a refund within 48 hours of the transaction by
                  contacting our support team with:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Transaction ID / UTR</li>
                  <li>Screenshot of the deduction</li>
                  <li>Email ID / Phone number used for the transaction</li>
                </ul>
                <p>
                  Upon internal verification with our payment partners, valid
                  claims will be refunded within 7–10 working days.
                </p>
              </AccordionContent>
            </AccordionItem>
          </div>
          <h4>❌ Ineligible Cases for Refund or Return</h4>
          <AccordionItem value="item-3">
            <AccordionTrigger>Unacceptable Refunds when:</AccordionTrigger>
            <AccordionContent>
              <p>Refunds/returns are not applicable in the following cases:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>If you change your mind after ordering.</li>
                <li>If you provide an incorrect delivery address.</li>
                <li>
                  If the product taste, texture, or colour does not meet
                  personal expectations.
                </li>
                <li>
                  If a claim is made after the stipulated timelines (24 hours
                  for product issues, 48 hours for payment issues).
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="multiple">
          <h3 className="text-lg font-semibold mb-2">
            How to Raise a Refund Request
          </h3>
          <AccordionItem value="item-1">
            <AccordionTrigger>How to Raise a Refund Request</AccordionTrigger>
            <AccordionContent>
              <p>
                Please email us at{" "}
                <b>
                  <u>support@flowhydration.in</u>
                </b>{" "}
                with:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Your order number</li>
                <li>Date of purchase</li>
                <li>Issue description</li>
                <li>Supporting photographs/screenshots (if applicable)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="multiple">
          <h3 className="text-lg font-semibold mb-2">Additional Notes</h3>
          <AccordionItem value="item-1">
            <AccordionTrigger>Additional Notes</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Refunds will only be issued to the original payment method.
                </li>
                <li>
                  We reserve the right to approve or reject refund claims at our
                  sole discretion based on evidence and internal investigation.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default TermsAndConditions;
