FROM quay.io/inrlwabot/inrl-bot-md:latest
RUN git clone https://github.com/ZIYAN-SER/Asena-MD /root/inrl/
WORKDIR /root/inrl/
ENV TZ=Asia/Kolkata
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
