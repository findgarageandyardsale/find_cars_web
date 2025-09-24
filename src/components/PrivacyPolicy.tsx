import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export function PrivacyPolicy() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b mt-16">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer border border-gray-200 hover:border-red-300 bg-white shadow-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">🚗</span>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                                <p className="text-gray-600">Find Car Sales - Last updated: {new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm border p-8 space-y-8">

                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to Find Car Sales ("we," "our," or "us"). This Privacy Policy explains how we collect,
                            use, disclose, and safeguard your information when you use our mobile application and related services.
                            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                            please do not access the application.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>

                        <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Personal Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                            <li>Register for an account</li>
                            <li>Create a car listing</li>
                            <li>Contact us for support</li>
                            <li>Participate in surveys or promotions</li>
                        </ul>

                        <h3 className="text-xl font-medium text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We automatically collect certain information when you use our app, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                            <li>Device information (model, operating system, unique device identifiers)</li>
                            <li>Usage data (app features used, time spent, pages viewed)</li>
                            <li>Location data (with your permission)</li>
                            <li>Log data (IP address, browser type, access times)</li>
                        </ul>
                    </section>

                    {/* How We Use Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                            <li>Provide, operate, and maintain our services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send you technical notices and support messages</li>
                            <li>Respond to your comments and questions</li>
                            <li>Improve our app and develop new features</li>
                            <li>Personalize your experience</li>
                            <li>Send marketing communications (with your consent)</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    {/* Information Sharing */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                            <li>With your explicit consent</li>
                            <li>To service providers who assist us in operating our app</li>
                            <li>When required by law or to protect our rights</li>
                            <li>In connection with a business transfer or merger</li>
                            <li>To prevent fraud or security issues</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your personal information
                            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                            the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Depending on your location, you may have certain rights regarding your personal information:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                            <li>Access and receive a copy of your personal information</li>
                            <li>Correct inaccurate or incomplete information</li>
                            <li>Delete your personal information</li>
                            <li>Restrict or object to certain processing</li>
                            <li>Data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    {/* Cookies and Tracking */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns,
                            and improve our services. You can control cookie settings through your device or browser preferences.
                        </p>
                    </section>

                    {/* Third-Party Services */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Services</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our app may contain links to third-party websites or services. We are not responsible for the privacy
                            practices of these third parties. We encourage you to read their privacy policies before providing
                            any personal information.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                            information from children under 13. If we become aware that we have collected personal information from
                            a child under 13, we will take steps to delete such information.
                        </p>
                    </section>

                    {/* Changes to Privacy Policy */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                            new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                            Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p className="text-gray-700 mb-2">
                                <strong>Email:</strong> privacy@findcarsales.com
                            </p>
                            <p className="text-gray-700 mb-2">
                                <strong>Address:</strong> 123 Car Street, Auto City, AC 12345
                            </p>
                            <p className="text-gray-700">
                                <strong>Phone:</strong> (555) 123-CARS
                            </p>
                        </div>
                    </section>

                    {/* Footer */}
                    <div className="border-t pt-8 mt-8">
                        <p className="text-sm text-gray-500 text-center">
                            This Privacy Policy is effective as of {new Date().toLocaleDateString()} and will remain in effect
                            except with respect to any changes in its provisions in the future, which will be in effect immediately
                            after being posted on this page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
