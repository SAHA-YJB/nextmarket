'use client';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ImageUpload from '@/components/ImageUpload';
import Input from '@/components/Input';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const ProductUploadPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  // react-hook-form 함수들
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
    // FieldValues는 제네릭 타입으로, 레지스터 타입오류 제거
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      price: 1,
      imageSrc: '',
      latitude: 33.5563,
      longitude: 126.79581,
    },
  });

  // watch 함수는 특정 입력 필드의 상태를 실시간으로 관찰하고 그 값을 반환하는 역할
  const imgSrc = watch('imageSrc');
  //밸류는 여러가지가 될 수 있다
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value);
  };

  //각 인풋에 대한 입력값을 data매개변수가 받음
  const onSubmit: SubmitHandler<FieldValues> = (data) => {};

  return (
    <Container>
      <div className='max-w-screen-lg mx-auto'>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
          <Heading title='Product Upload' subtitle='Upload Your Product' />
          <ImageUpload
            onChange={(value) => setCustomValue('imageSrc', value)}
            value={imgSrc}
          />
          <Input
            id='title'
            label='Title'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id='description'
            label='Description'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id='price'
            label='Price'
            formatPrice
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />

          <div className='grid grid-cols-1 md:cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
            {/* 카테고리 */}
          </div>
          <hr />

          {/* 카카오맵 */}

          <Button label='상품 생성하기' />
        </form>
      </div>
    </Container>
  );
};

export default ProductUploadPage;
