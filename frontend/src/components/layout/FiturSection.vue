<template>
  <section
    id="fitur"
    data-aos="fade-up"
    class="relative flex flex-col items-center justify-between px-6 py-12 overflow-hidden bg-primarywhite md:flex-row md:px-16"
  >

    <div class="w-full grid grid-cols-1 gap-5 md:flex md:items-start md:gap-10">
      <div class="w-full md:w-auto flex justify-center md:justify-start">
        <img
          src="@/assets/image/hasilanalisis.png"
          alt="Hasil Analisis"
          class="screenshot-img"
        />
      </div>

      <div class="z-10 flex-1 text-center md:text-left">
        <h2 class="mb-8 text-3xl font-bold md:text-5xl text-primarypurple">
          Fitur dari ReadaSense
        </h2>

        <div class="space-y-8">
          <div class="features-list">
            <div class="feature-item">
              <img src="@/assets/image/feature-sentimen.png" alt="Deteksi Sentimen" class="feature-img" />
              <p class="feature-description">
                Deteksi nada emosional dalam teks berita—apakah positif, netral, atau negatif—dengan visualisasi yang mudah dipahami.
              </p>
            </div>
            <div class="feature-divider"></div>
            <div class="feature-item">
              <img src="@/assets/image/feature-readability.png" alt="Nilai Keterbacaan" class="feature-img" />
              <p class="feature-description">
                Ukur tingkat keterbacaan artikel dengan metrik standar, lengkap dengan kategori (mudah, sedang, sulit) agar pembaca tahu seberapa kompleks teksnya.
              </p>
            </div>
            <div class="feature-divider"></div>
            <div class="feature-item">
              <img src="@/assets/image/feature-statistic.png" alt="Statistik Teks" class="feature-img" />
              <p class="feature-description">
                Ukur tingkat keterbacaan artikel dengan metrik standar, lengkap dengan kategori (mudah, sedang, sulit) agar pembaca tahu seberapa kompleks teksnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 -z-0 hero-mesh-bg"></div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-mesh-bg {
  background:
    radial-gradient(
      circle at 100% 40%,
      rgba(64, 132, 239, 0.4) 0%,
      transparent 60%
    ),
    radial-gradient(
      circle at 160% 90%,
      rgba(101, 64, 239, 0.2) 0%,
      transparent 70%
    );
  filter: blur(80px);
  border-radius: 1000px;
  width: 450px;
  height: 450px;
  margin: auto;
}

.screenshot-img {
  width: 100%;
  max-width: 561px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
}

.feature-img {
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
}

.features-list {
  max-width: 800px;
  margin: 0 auto;
}

.feature-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
}

/* desktop: horizontal layout */
@media (min-width: 768px) {
  .feature-item {
    flex-direction: row;
    gap: 16px;
    align-items: flex-start;
    justify-content: space-between;
  }
}

.feature-description {
  flex: 1;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  color: var(--neutral-black);
}

.feature-divider {
  height: 2px;
  background: var(--primary-blue);
  margin: 16px 0;
}
</style>
