import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair text-cake-burgundy text-center mb-8">
        {t('faq.title')}
      </h1>
      <div className="space-y-4 max-w-3xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
              {t('faq.location.question')}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('faq.location.answer')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
              {t('faq.hours.question')}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('faq.hours.answer')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
              {t('faq.cakeTypes.question')}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('faq.cakeTypes.answer')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
              {t('faq.fillings.question')}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('faq.fillings.answer')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
              {t('faq.frosting.question')}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('faq.frosting.answer')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
              {t('faq.appointment.question')}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('faq.appointment.answer')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
              {t('faq.readyToGo.question')}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('faq.readyToGo.answer')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
              {t('faq.storefront.question')}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('faq.storefront.answer')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
              {t('faq.contact.question')}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('faq.contact.answer')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
              {t('faq.payment.question')}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('faq.payment.answer')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
              {t('faq.deposit.question')}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('faq.deposit.answer')}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair text-cake-burgundy mb-2">
              {t('faq.delivery.question')}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {t('faq.delivery.answer')}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;