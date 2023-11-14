import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { MessagesSquare } from 'lucide-react';

export const Why = (props) => {
  return (
    <>
      <Container id='why' maxWidth="none" className="whyContainer">
        <Container maxWidth="lg">
          <Grid container spacing={8} direction="column" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography className="whyTitle">
                Neden Bizi Seçmelisiniz?
                <hr />
              </Typography>
            </Grid>
            <Grid item container xs={12} textAlign="center" spacing={5} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6} md={4}>
                <Typography>
                  <MessagesSquare className="whyIcon" />
                </Typography>
                <Typography className="whyText1">
                  Uzmanlık ve Deneyim
                </Typography>
                <Typography className="whyText2">
                  Yılların verdiği deneyimle, sektörde uzmanlaşmış bir ekibe sahibiz.
                  Çeşitli sektörlerde başarıyla tamamlanan projelerimizle güvenilir ve etkili bir çözüm ortağıyız.
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography>
                  <MessagesSquare className="whyIcon" />
                </Typography>
                <Typography className="whyText1">
                  Müşteri Odaklı Yaklaşım
                </Typography>
                <Typography className="whyText2">
                  Müşterilerin ihtiyaçlarını anlamak ve onlara çözümler sunmak için odaklanmış yaklaşım benimsiyoruz.
                  İşbirliği ve iletişim ile müşteri memnuniyetini amaçlıyoruz.
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography>
                  <MessagesSquare className="whyIcon" />
                </Typography>
                <Typography className="whyText1">
                  Teknolojik İnovasyon
                </Typography>
                <Typography className="whyText2">
                  Sürekli olarak güncellenen teknoloji trendlerini takip ederek, müşterilerimize en yenilikçi çözümleri sunuyoruz.
                  İş süreçlerini optimize edip rekabet avantajı elde etmenizi sağlıyoruz.
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography>
                  <MessagesSquare className="whyIcon" />
                </Typography>
                <Typography className="whyText1">
                  Güvenlik ve Veri Gizliliği
                </Typography>
                <Typography className="whyText2">
                  Güvenlik konusuna özel bir önem veriyor müşteri verilerini en üst düzeyde koruma taahhüdümüzü sürdürüyoruz. 
                  Güvenlik standartlarına uygun çözümlerimizle, müşteri bilgilerini güvende tutuyoruz.
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography>
                  <MessagesSquare className="whyIcon" />
                </Typography>
                <Typography className="whyText1">
                  Esnek ve Ölçeklenebilir Çözümler
                </Typography>
                <Typography className="whyText2">
                  Müşterilerimizin büyüme hedeflerine uygun olarak esnek ve ölçeklenebilir yazılım çözümleri sunuyoruz.
                  İhtiyaçlarınıza uygun olarak çözümlerimizi özelleştiriyor ve geliştiriyoruz.
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography>
                  <MessagesSquare className="whyIcon" />
                </Typography>
                <Typography className="whyText1">
                  Proje Yönetimi ve Zamanında Teslimat
                </Typography>
                <Typography className="whyText2">
                  Projelerimizi titizlikle planlayarak ve etkili proje yönetimi uygulayarak zamanında teslim ediyoruz.
                  Proje süreçlerimizde şeffaf iletişim koordinasyonuyla müşterilerimize güven sağlıyoruz.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};
